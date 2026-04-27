import api from "@/lib/api";
import React, { ReactNode } from "react";

interface DataFetcherProps<T> {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any;
  options?: RequestInit;
  /**
   * Render-prop pattern to pass data to children
   */
  children: (data: T) => ReactNode;
  /**
   * Fallback for error state
   */
  errorFallback?: (error: Error) => ReactNode;
}

/**
 * A declarative server component for SSR data fetching.
 * Wrap this in a Suspense boundary for loading states.
 */
export default async function DataFetcher<T>({
  endpoint,
  method = "GET",
  body,
  options = {},
  children,
  errorFallback,
}: DataFetcherProps<T>) {
  let data: T;
  let fetchError: any = null;

  try {
    data = await api.request<T>(endpoint, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    });
  } catch (error) {
    fetchError = error;
  }

  if (fetchError) {
    console.error(`DataFetcher Error [${method} ${endpoint}]:`, fetchError);
    
    if (errorFallback) {
      return <>{errorFallback(fetchError as Error)}</>;
    }

    return (
      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
        Failed to load data: {fetchError instanceof Error ? fetchError.message : "Unknown error"}
      </div>
    );
  }

  return <>{children(data!)}</>;
}

