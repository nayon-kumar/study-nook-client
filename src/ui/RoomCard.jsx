import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const RoomCard = ({ room }) => {
  return (
    <div className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
      <Link href="/">
        <div className="relative aspect-video">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="rounded-t-xl"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-bold text-lg md:text-xl">{room.name}</h3>
            <Chip color="accent">${room.price}/hr</Chip>
          </div>
          <p className="mt-2 line-clamp-2">{room.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default RoomCard;
