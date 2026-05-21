import BackButton from "@/components/Details/BackButton";
import BookNowModal from "@/components/Details/BookNowModal";
import DeleteDialog from "@/components/Details/DeleteDialog";
import EditModal from "@/components/Details/EditModal";
import MyContainer from "@/components/shared/MyContainer";
import { auth } from "@/lib/auth";
import { getOneRoomByID } from "@/lib/data";
import { Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { FaHouseDamage } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { RxPeople } from "react-icons/rx";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const room = await getOneRoomByID(id, token);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <MyContainer className="pt-38 pb-20">
      <div>
        <BackButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <div className="relative aspect-video">
            <Image
              src={room.image}
              alt={room.name}
              fill
              className="rounded-xl"
            />
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="mg:text-2xl text-3xl font-bold">{room.name}</h3>
              <Chip color="success" className="flex items-center gap-2 w-fit">
                <FaCheck />
                {room.bookings} Bookings
              </Chip>
            </div>
            <p className="mt-2 text-gray-500">
              Listed on {room.date.slice(0, 10)}
            </p>
            <p className="mt-2 text-gray-500">{room.description}</p>
            <h4 className="mt-4 font-semibold text-lg">Amenities</h4>
            <div className="flex mt-4 flex-wrap items-center gap-2">
              {room?.amenities.map((amenitie, index) => (
                <Chip key={index} color="success">
                  {amenitie}
                </Chip>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="border border-gray-200 bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <p className="font-bold text-3xl ">${room.price}</p>
              <p>Per Hour</p>
            </div>
            <div className="mt-4 space-y-2">
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
            <BookNowModal room={room} />
            {user?.id === room?.userID && (
              <>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <EditModal room={room} />
                  <DeleteDialog room={room} />
                </div>
              </>
            )}
          </div>
          <div className="border border-gray-200 bg-white rounded-xl shadow p-6 mt-4">
            <p className="text-gray-500">Listed By</p>
            <div className="mt-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={room?.userImage || "/user.png"}
                  alt={room.userName}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-gray-700">
                <p>{room.userName}</p>
                <p>{room.userEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default DetailsPage;
