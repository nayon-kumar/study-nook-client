import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import MyContainer from "../shared/MyContainer";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiOutlineClipboardList } from "react-icons/hi";

const Why = () => {
  return (
    <div className="py-15 my-10 bg-[#F4F1E9]">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Why StudyNook?
      </h2>
      <p className="text-gray-500 mt-2 mb-8 text-center px-4">
        Built around the way real students study - quiet, focused, and on your
        schedule.
      </p>
      <MyContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
        <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2">
          <div className="bg-green-500 w-fit p-3 rounded-xl">
            <FaRegCalendarCheck size={22} className="text-white" />
          </div>
          <h4 className="font-bold text-lg md:text-xl mt-4">Easy Booking</h4>
          <p className="text-gray-500 mt-2">
            Pick a date, choose an hour, see the cost - done. No back-and-forth
            emails or paperwork.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2">
          <div className="bg-green-500 w-fit p-3 rounded-xl">
            <RiCalendarScheduleLine size={23} className="text-white" />
          </div>
          <h4 className="font-bold text-lg md:text-xl mt-4">
            Conflict-Free Scheduling
          </h4>
          <p className="text-gray-500 mt-2">
            Smart overlap detection prevents double-bookings, so the room you
            reserve is the room you get.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2">
          <div className="bg-green-500 w-fit p-3 rounded-xl">
            <HiOutlineClipboardList size={24} className="text-white" />
          </div>
          <h4 className="font-bold text-lg md:text-xl mt-4">
            Manage Your Listings
          </h4>
          <p className="text-gray-500 mt-2">
            Own a room? List it, set your hourly rate, and keep full control
            from your dashboard.
          </p>
        </div>
      </MyContainer>
    </div>
  );
};

export default Why;
