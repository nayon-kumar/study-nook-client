"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";

const AddButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/add-room")}>
      <FaPlus /> Add Room
    </Button>
  );
};

export default AddButton;
