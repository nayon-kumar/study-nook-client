"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const RoomSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);

  const handleSearch = () => {
    const query = search.trim();

    if (query) {
      router.push(`/rooms?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/rooms");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full mt-10">
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center bg-white p-3 md:p-4 rounded-2xl shadow-md border border-gray-100">
        {/* Input */}
        <div className="flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search rooms by name..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-black/20
                       focus:border-black transition"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSearch}
          className="w-full md:w-auto px-6 py-3 rounded-xl 
                     bg-black text-white font-medium
                     hover:bg-gray-800 active:scale-[0.98]
                     transition-all duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default RoomSearch;
