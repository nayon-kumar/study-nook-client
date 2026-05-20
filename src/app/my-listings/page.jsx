import AddButton from "@/components/MyListings/AddButton";
import MyContainer from "@/components/shared/MyContainer";
import { auth } from "@/lib/auth";
import { getMyListingsByUserID } from "@/lib/data";
import RoomCard from "@/ui/RoomCard";
import { headers } from "next/headers";
import { CiFileOn } from "react-icons/ci";

export const metadata = {
  title: "My Listings - StudyNook",
  description:
    "StudyNook is a full-stack web application where students and library users can list study rooms they control (e.g., private rooms in a university library), and any registered user can browse, search, filter, and book those rooms for a specific date and time slot. ",
};

const MyListingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const myListings = await getMyListingsByUserID(user.id);
  return (
    <MyContainer className="pt-40 pb-20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
            My Listings
          </h3>
          <p className="text-gray-500 mt-2">
            Rooms you currently host on StudyNook.
          </p>
        </div>
        <AddButton />
      </div>
      {myListings.length > 0 ? (
        <div className="grid gap-6 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {myListings.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 flex flex-col gap-2 items-center justify-center mt-15">
          <CiFileOn size={120} />
          <p>
            No listing found. Click +add room button or go to add room tab for
            listing your room.
          </p>
        </div>
      )}
    </MyContainer>
  );
};

export default MyListingsPage;
