"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const RoomSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/rooms?search=${search}`);
    } else {
      router.push("/rooms");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 items-center justify-between mt-10">
      <div className="w-full md:w-2/3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by room name..."
          className="w-full border p-3 rounded-lg outline-none"
        />
      </div>

      <button
        onClick={handleSearch}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default RoomSearch;
