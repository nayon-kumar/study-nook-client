"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ViewButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/rooms")}>
      View All Rooms <FaArrowRight />
    </Button>
  );
};

export default ViewButton;
