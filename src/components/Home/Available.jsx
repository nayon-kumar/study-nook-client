import React from "react";
import MyContainer from "../shared/MyContainer";
import ViewButton from "./ViewButton";
import { getLatestRooms } from "@/lib/data";
import RoomCard from "@/ui/RoomCard";

const Available = async () => {
  const rooms = await getLatestRooms();
  console.log(rooms);
  return (
    <MyContainer className="pt-15 pb-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
            Available Study Rooms
          </h3>
          <p className="text-gray-500 mt-2">
            Hand-picked rooms recently added to StudyNook.
          </p>
        </div>
        <ViewButton />
      </div>
      <div className="grid gap-6 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </MyContainer>
  );
};

export default Available;
