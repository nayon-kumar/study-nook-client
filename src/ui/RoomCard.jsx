import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHouseDamage } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RxPeople } from "react-icons/rx";

const RoomCard = ({ room }) => {
  return (
    <div className="h-full bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
      <Link href="/" className="flex flex-col h-full">
        <div className="relative aspect-video">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="rounded-t-xl object-cover"
          />
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-bold text-lg md:text-xl">{room.name}</h3>

            <Chip color="accent">${room.price}/hr</Chip>
          </div>

          <p className="mt-2 line-clamp-2 text-gray-700">{room.description}</p>

          <div className="mt-2 flex flex-wrap gap-3 items-center">
            <div className="flex items-center text-gray-500 gap-2">
              <FaHouseDamage />
              <p>{room.floor} Floor</p>
            </div>

            <div className="flex items-center text-gray-500 gap-2">
              <RxPeople />
              <p>{room.capacity} People</p>
            </div>

            <div className="flex items-center text-gray-500 gap-2">
              <FaCheck />
              <p>{room.bookings} Bookings</p>
            </div>
          </div>

          <div className="flex mt-2 mb-4 flex-wrap items-center gap-2">
            {room.amenities.map((amenitie, index) => (
              <Chip key={index} color="success">
                {amenitie}
              </Chip>
            ))}
          </div>

          {/* Push button to bottom */}
          <Button className="mt-auto w-full">View Details</Button>
        </div>
      </Link>
    </div>
  );
};

export default RoomCard;
