"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-7xl font-bold bg-linear-to-r from-[#1F2937] to-[#244D3F]  text-transparent bg-clip-text">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-600 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-linear-to-r from-[#1F2937] to-[#244D3F] text-white rounded-full shadow  transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
