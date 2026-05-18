import MyContainer from "@/components/shared/MyContainer";
import { getAllRooms } from "@/lib/data";

export const metadata = {
  title: "Rooms - StudyNook",
  description:
    "StudyNook is a full-stack web application where students and library users can list study rooms they control (e.g., private rooms in a university library), and any registered user can browse, search, filter, and book those rooms for a specific date and time slot. ",
};

const RoomsPage = async () => {
  const rooms = await getAllRooms();
  console.log(rooms);
  return (
    <MyContainer className="pt-40 pb-20">
      <div className="text-center">
        <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
          All Study Rooms
        </h3>
        <p className="mt-4 text-[#6C696D] ">
          Browse the full catalog. Filter by amenity, price, or search by name.
        </p>
      </div>
    </MyContainer>
  );
};

export default RoomsPage;
