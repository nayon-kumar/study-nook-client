"use client";
import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import MyContainer from "../shared/MyContainer";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiOutlineClipboardList } from "react-icons/hi";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const How = () => {
  const router = useRouter();
  return (
    <div className="pb-10 pt-10 my-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        How It Works
      </h2>
      <p className="text-gray-500 mt-2 mb-8 text-center px-4">
        From browsing to booked in under a minute.
      </p>
      <MyContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
        <div className="bg-white flex flex-col items-center justify-center rounded-xl p-6 border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 text-center">
          <div className="bg-[#2196F3] w-fit p-3 rounded-full">
            <RiCalendarScheduleLine size={23} className="text-white" />
          </div>
          <h4 className="font-bold text-lg md:text-xl mt-4">Browse Rooms</h4>
          <p className="text-gray-500 mt-2">
            Filter by floor, capacity, amenities, or hourly rate to find your
            fit.
          </p>
        </div>
        <div className="bg-white flex flex-col items-center justify-center rounded-xl p-6 border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 text-center">
          <div className="bg-[#2196F3] w-fit p-3 rounded-full">
            <HiOutlineClipboardList size={24} className="text-white" />
          </div>
          <h4 className="font-bold text-lg md:text-xl mt-4">Pick a Time</h4>
          <p className="text-gray-500 mt-2">
            Choose a date and an open time slot - we'll prevent any conflicts.
          </p>
        </div>
        <div className="bg-white flex flex-col items-center justify-center rounded-xl p-6 border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 text-center">
          <div className="bg-[#2196F3] w-fit p-3 rounded-full">
            <FaRegCalendarCheck size={22} className="text-white" />
          </div>
          <h4 className="font-bold text-lg md:text-xl mt-4">
            Study Peacefully
          </h4>
          <p className="text-gray-500 mt-2">
            Get a confirmation, show up, and focus. Manage everything from your
            dashboard.
          </p>
        </div>
      </MyContainer>
      <div className="text-center mt-15">
        <Button onClick={() => router.push("/rooms")} className="rounded-md">
          Start Browsing <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default How;
