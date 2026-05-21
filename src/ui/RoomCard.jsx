"use client";

import { useRouter } from "next/navigation";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { FaHouseDamage } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RxPeople } from "react-icons/rx";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const RoomCard = ({ room }) => {
  const router = useRouter();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div
        onClick={() => router.push(`/details/${room?._id}`)}
        className="cursor-pointer h-full bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 rounded-xl"
      >
        <div className="flex flex-col h-full">
          <div className="relative aspect-video">
            <Image
              src={room?.image}
              alt={room?.name}
              fill
              className="rounded-t-xl object-cover"
            />
          </div>

          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-bold text-lg md:text-xl">{room?.name}</h3>
              <Chip color="accent">${room?.price}/hr</Chip>
            </div>

            <p className="mt-2 line-clamp-2 text-gray-700">
              {room?.description}
            </p>

            <div className="mt-2 flex flex-wrap gap-3 items-center">
              <div className="flex items-center text-gray-500 gap-2">
                <FaHouseDamage />
                <p>{room?.floor} Floor</p>
              </div>

              <div className="flex items-center text-gray-500 gap-2">
                <RxPeople />
                <p>{room?.capacity} People</p>
              </div>

              <div className="flex items-center text-gray-500 gap-2">
                <FaCheck />
                <p>{room?.bookings} Bookings</p>
              </div>
            </div>

            <div className="flex mt-2 mb-4 flex-wrap items-center gap-2">
              {room?.amenities.map((amenitie, index) => (
                <Chip key={index} color="success">
                  {amenitie}
                </Chip>
              ))}
            </div>

            <Button
              className="mt-auto w-full"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/details/${room?._id}`);
              }}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
