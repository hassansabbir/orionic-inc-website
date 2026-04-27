"use client";

import React from "react";
import { RefreshCw } from "lucide-react";

export default function TryAgainButton() {
  return (
    <button 
      onClick={() => window.location.reload()} 
      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-all active:scale-95 shadow-lg"
    >
      <RefreshCw className="w-4 h-4" />
      Try Again
    </button>
  );
}
