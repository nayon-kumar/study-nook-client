"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600">Oops!</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Something went wrong
      </h2>

      <p className="mt-2 text-gray-600 max-w-md">
        An unexpected error has occurred. Please try again.
      </p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="px-6 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-900 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
