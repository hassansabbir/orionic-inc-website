import { ApiError, apiRequest } from "@/lib/api";
import { AlertCircle } from "lucide-react";
import TryAgainButton from "./TryAgainButton";

interface SSRFetchProps<T> {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any;
  options?: RequestInit & { next?: { revalidate?: number | false; tags?: string[] } };
  children: (data: T) => React.ReactNode;
  errorFallback?: (error: ApiError | Error) => React.ReactNode;
  loadingFallback?: React.ReactNode;
}

/**
 * SSRFetch is a Server Component that handles data fetching with built-in error handling.
 * It's designed to be used within Next.js App Router pages or other Server Components.
 */
export async function SSRFetch<T>({
  endpoint,
  method = "GET",
  body,
  options = {},
  children,
  errorFallback,
  loadingFallback,
}: SSRFetchProps<T>) {
  try {
    const data = await apiRequest<T>(endpoint, {
      ...options,
      method,
      body: body ? JSON.stringify(body) : undefined,
    });
    return <>{children(data)}</>;
  } catch (error) {
    // If a custom error fallback is provided, use it
    if (errorFallback) {
      return <>{errorFallback(error as any)}</>;
    }

    const apiError = error instanceof ApiError ? error : new ApiError(
      error instanceof Error ? error.message : "An unexpected error occurred",
      500
    );

    // Premium Error UI
    return (
      <div className="w-full py-12 px-6 flex flex-col items-center justify-center text-center animate-in fade-in duration-700">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full scale-150" />
          <div className="relative bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-2xl shadow-xl shadow-red-500/20">
            <AlertCircle className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">
          Oops! Something went wrong
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8">
          {apiError.message}
        </p>

        <TryAgainButton />
        
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-800/50 rounded-lg text-left overflow-auto max-w-2xl w-full border border-slate-200 dark:border-slate-700">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Debug Info</p>
            <pre className="text-xs font-mono text-red-500 whitespace-pre-wrap">
              {JSON.stringify({
                status: apiError.status,
                data: apiError.data,
                stack: error instanceof Error ? error.stack : undefined
              }, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  }
}
