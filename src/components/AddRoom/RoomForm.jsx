"use client";
import { authClient } from "@/lib/auth-client";
import { addRoom } from "@/lib/data";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Spinner,
  Tag,
  TagGroup,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const RoomForm = () => {
  const [multipleSelected, setMultipleSelected] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());
    const roomData = {
      name: formInputData.name,
      description: formInputData.description,
      image: formInputData.image,
      floor: Number(formInputData.floor),
      capacity: Number(formInputData.capacity),
      price: Number(formInputData.price),
      amenities: multipleSelected,
      bookings: 0,
      date: new Date().toLocaleDateString(),
      userID: user.id,
      userName: user.name,
      userEmail: user.email,
      userImage: user.image,
    };

    try {
      setIsPending(true);

      const result = await addRoom(roomData);

      if (result.insertedId) {
        toast.success(`${roomData.name} Room Added!`);
        router.push("/my-listings");
      }

      e.target.reset();
      setMultipleSelected([]);
    } catch (error) {
      toast.error("Failed to add room!");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex w-full p-10 rounded-xl shadow bg-[#F8F8F8] flex-col gap-4 border border-gray-100">
        <Form onSubmit={onSubmit} className="space-y-4">
          <TextField isRequired name="name" type="text">
            <Label>Room Name</Label>
            <Input placeholder="Enter room name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="description" type="text">
            <Label>Room Description</Label>
            <TextArea
              className="h-20 w-full"
              placeholder="Write description about the room"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="url">
            <Label>Image URL</Label>
            <Input placeholder="https://..." />
            <FieldError />
          </TextField>

          <TextField isRequired name="floor" type="number">
            <Label>Floor</Label>
            <Input placeholder="Floor Number" />
            <FieldError />
          </TextField>

          <TextField isRequired name="capacity" type="number">
            <Label>Capacity</Label>
            <Input placeholder="Number of people" />
            <FieldError />
          </TextField>

          <TextField isRequired name="price" type="number">
            <Label>Hourly Rate ($)</Label>
            <Input placeholder="Price per hour" />
            <FieldError />
          </TextField>

          <TagGroup
            selectedKeys={multipleSelected}
            selectionMode="multiple"
            onSelectionChange={(keys) => setMultipleSelected([...keys])}
          >
            <Label className="pb-2">Select Amenities</Label>
            <TagGroup.List>
              <Tag id="Whiteboard" className="text-sm px-3 py-1">
                Whiteboard
              </Tag>
              <Tag id="Projector" className="text-sm px-3 py-1">
                Projector
              </Tag>
              <Tag id="Wi-Fi" className="text-sm px-3 py-1">
                Wi-Fi
              </Tag>
              <Tag id="Power Outlets" className="text-sm px-3 py-1">
                Power Outlets
              </Tag>
              <Tag id="Quiet Zone" className="text-sm px-3 py-1">
                Quiet Zone
              </Tag>
              <Tag id="Air Conditioning" className="text-sm px-3 py-1">
                Air Conditioning
              </Tag>
            </TagGroup.List>
          </TagGroup>

          <div className="flex gap-2">
            <Button type="submit" className="w-full">
              {isPending ? (
                <>
                  <Spinner color="current" size="sm" />
                  Adding...
                </>
              ) : (
                <>
                  <Check />
                  Add Room
                </>
              )}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RoomForm;
