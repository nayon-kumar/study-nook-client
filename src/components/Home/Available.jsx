"use client";
import { Button } from "@heroui/react";
import React from "react";
import MyContainer from "../shared/MyContainer";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Available = () => {
  const router = useRouter();
  return (
    <MyContainer className="pt-15">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
            Available Study Rooms
          </h3>
          <p className="text-gray-500 mt-2">
            Hand-picked rooms recently added to StudyNook.
          </p>
        </div>
        <Button onClick={() => router.push("/rooms")}>
          View All Rooms <FaArrowRight />
        </Button>
      </div>
    </MyContainer>
  );
};

export default Available;
