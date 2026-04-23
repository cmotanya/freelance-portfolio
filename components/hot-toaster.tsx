"use client";

import { Toaster } from "react-hot-toast";

export default function HotToaster() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        className: "font-sora",
        success: {
          style: {
            backgroundColor: "green",
            color: "white",
          },
        },

        error: {
          style: {
            backgroundColor: "red",
            color: "white",
          },
        },
      }}
    />
  );
}
