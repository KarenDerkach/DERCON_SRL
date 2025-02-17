"use client";

import { useEffect, useState } from "react";

export default function Loading({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div id="preloader">
        <div className="d-flex justify-content-center align-items-center h-100" />
      </div>
    );
  }
  return children;
}
