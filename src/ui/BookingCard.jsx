import CancelBookingAlert from "@/components/MyBookings/CancelBookingAlert";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const BookingCard = ({ booking }) => {
  return (
    <div className="border rounded-2xl shadow-md bg-white p-4 sm:p-5">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-44 aspect-video rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={booking.roomImage}
                alt={booking.roomName}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {booking.roomName}
                </h3>

                <p className="text-sm text-gray-500">
                  📅 {booking.bookingDate}
                </p>

                <p className="text-sm text-gray-500">
                  ⏰ {booking.startTime}:00 - {booking.endTime}:00
                </p>
              </div>

              <p className="text-sm font-medium text-gray-800">
                Total Cost:{" "}
                <span className="text-black font-semibold">
                  ${booking.totalCost}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col flex-row items-center md:items-end md:justify-start gap-3 w-full md:w-auto">
          <Chip
            color={booking.status === "cancelled" ? "danger" : "success"}
            className="capitalize"
          >
            {booking.status}
          </Chip>

          {booking?.status === "confirmed" && (
            <CancelBookingAlert booking={booking} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
