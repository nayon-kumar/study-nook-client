import MyContainer from "@/components/shared/MyContainer";
import { getOneRoomByID } from "@/lib/data";
import React from "react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const room = await getOneRoomByID(id);
  console.log(room);
  return (
    <MyContainer className="pt-40">
      <p>Details page</p>
    </MyContainer>
  );
};

export default DetailsPage;
