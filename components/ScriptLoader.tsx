"use client";
import { useEffect } from "react";

const ScriptLoader = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const tag = document.createElement("script");
      tag.src = "https://someurl.com/script.js"; // change this to your actual script
      tag.async = true;
      document.body.appendChild(tag);

      return () => {
        document.body.removeChild(tag);
      };
    }
  }, []);

  return null;
};

export default ScriptLoader;
