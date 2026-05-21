import MyContainer from "@/components/shared/MyContainer";
import { auth } from "@/lib/auth";
import { getMyBookingsByUserID } from "@/lib/data";
import BookingCard from "@/ui/BookingCard";
import { headers } from "next/headers";
import { CiFileOn } from "react-icons/ci";

export const metadata = {
  title: "My Bookings - StudyNook",
  description:
    "StudyNook is a full-stack web application where students and library users can list study rooms they control (e.g., private rooms in a university library), and any registered user can browse, search, filter, and book those rooms for a specific date and time slot. ",
};

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const myBookings = await getMyBookingsByUserID(user.id, token);
  return (
    <MyContainer className="pt-40 pb-20">
      <div className="text-center">
        <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
          My Bookings
        </h3>
        <p className="mt-4 text-[#6C696D]">
          Manage your upcoming and past room reservations.
        </p>
      </div>
      {myBookings.length > 0 ? (
        <div className="mt-10 flex flex-col gap-4">
          {myBookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 flex flex-col gap-2 items-center justify-center mt-15">
          <CiFileOn size={120} />
          <p>No booking found. Go to room tab for book your room</p>
        </div>
      )}
    </MyContainer>
  );
};

export default MyBookingsPage;
