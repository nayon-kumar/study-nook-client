"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="secondary" onClick={() => router.back()}>
      <FaArrowLeft />
      Go Back
    </Button>
  );
};

export default BackButton;
