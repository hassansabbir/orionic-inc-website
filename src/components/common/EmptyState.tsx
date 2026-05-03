import React from "react";
import { Database } from "lucide-react";
import Typography from "@/components/ui/Typography";

interface EmptyStateProps {
  message?: string;
  description?: string;
}

const EmptyState = ({ 
  message = "No data found", 
  description = "There is currently no information available for this section. Please check back later." 
}: EmptyStateProps) => {
  return (
    <div className="w-full py-16 px-6 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-slate-200/50 blur-2xl rounded-full scale-150" />
        <div className="relative bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
          <Database className="w-10 h-10 text-slate-400" />
        </div>
      </div>
      
      <Typography variant="h3" className="text-2xl font-bold text-slate-800 mb-2">
        {message}
      </Typography>
      
      <p className="text-slate-500 max-w-sm">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;
