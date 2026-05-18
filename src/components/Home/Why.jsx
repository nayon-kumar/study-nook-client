import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import MyContainer from "../shared/MyContainer";

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
        <div className="bg-white rounded-xl p-4">
          <div className="bg-[#E7EBE7] w-fit p-3 rounded-xl">
            <FaRegCalendarCheck size={20} />
          </div>
          <h4 className="font-bold text-xl mt-4">Easy Booking</h4>
          <p className="text-gray-500 mt-2">
            Pick a date, choose an hour, see the cost — done. No back-and-forth
            emails or paperwork.
          </p>
        </div>
        <div className="bg-white rounded-xl p-4">
          <div className="bg-[#E7EBE7] w-fit p-3 rounded-xl">
            <FaRegCalendarCheck size={20} />
          </div>
          <h4 className="font-bold text-xl mt-4">Easy Booking</h4>
          <p className="text-gray-500 mt-2">
            Pick a date, choose an hour, see the cost — done. No back-and-forth
            emails or paperwork.
          </p>
        </div>
        <div className="bg-white rounded-xl p-4">
          <div className="bg-[#E7EBE7] w-fit p-3 rounded-xl">
            <FaRegCalendarCheck size={20} />
          </div>
          <h4 className="font-bold text-xl mt-4">Easy Booking</h4>
          <p className="text-gray-500 mt-2">
            Pick a date, choose an hour, see the cost — done. No back-and-forth
            emails or paperwork.
          </p>
        </div>
      </MyContainer>
    </div>
  );
};

export default Why;
