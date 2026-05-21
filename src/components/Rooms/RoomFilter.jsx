"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const AMENITIES = [
  "Wi-Fi",
  "Projector",
  "Whiteboard",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
];

export default function RoomFilter() {
  const router = useRouter();
  const params = useSearchParams();

  const [minPrice, setMinPrice] = useState(params.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(params.get("maxPrice") || "");
  const [amenities, setAmenities] = useState(
    params.get("amenities")?.split(",") || [],
  );

  // Toggle Amenity
  const toggleAmenity = (item) => {
    setAmenities((prev) =>
      prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item],
    );
  };

  // Apply Filters
  const applyFilters = () => {
    const query = new URLSearchParams();

    const search = params.get("search");
    if (search) query.set("search", search);

    if (minPrice) query.set("minPrice", minPrice);
    if (maxPrice) query.set("maxPrice", maxPrice);

    if (amenities.length > 0) {
      query.set("amenities", amenities.join(","));
    }

    router.push(`/rooms?${query.toString()}`);
  };

  // Clear Filters
  const clearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setAmenities([]);

    const search = params.get("search");

    if (search) {
      router.push(`/rooms?search=${search}`);
    } else {
      router.push("/rooms");
    }
  };

  return (
    <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          Filter Rooms
        </h2>

        {(minPrice || maxPrice || amenities.length > 0) && (
          <span className="text-sm text-gray-500">
            {amenities.length} selected
          </span>
        )}
      </div>

      {/* Price Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600 mb-1 block">
            Minimum Price
          </label>

          <input
            type="number"
            placeholder="e.g. 100"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-black/10
                       focus:border-black transition"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 mb-1 block">
            Maximum Price
          </label>

          <input
            type="number"
            placeholder="e.g. 500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3
                       focus:outline-none focus:ring-2 focus:ring-black/10
                       focus:border-black transition"
          />
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Amenities</h3>

        <div className="flex flex-wrap gap-3">
          {AMENITIES.map((item) => {
            const active = amenities.includes(item);

            return (
              <button
                key={item}
                onClick={() => toggleAmenity(item)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
                  ${
                    active
                      ? "bg-black text-white border-black shadow-sm"
                      : "bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black"
                  }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={applyFilters}
          className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-xl
                     font-medium hover:bg-gray-800 active:scale-[0.98]
                     transition-all duration-200"
        >
          Apply Filters
        </button>

        <button
          onClick={clearFilters}
          className="w-full sm:w-auto border border-gray-300 px-6 py-3 rounded-xl
                     font-medium text-gray-700 hover:border-black hover:text-black
                     transition-all duration-200"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
