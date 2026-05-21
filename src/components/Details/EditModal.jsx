"use client";
import { authClient } from "@/lib/auth-client";
import { editRoom } from "@/lib/data";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Spinner,
  Surface,
  Tag,
  TagGroup,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";

const EditModal = ({ room }) => {
  const [multipleSelected, setMultipleSelected] = useState(
    room?.amenities || [],
  );
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());
    const updatedRoomData = {
      name: formInputData.name,
      description: formInputData.description,
      image: formInputData.image,
      floor: Number(formInputData.floor),
      capacity: Number(formInputData.capacity),
      price: Number(formInputData.price),
      amenities: multipleSelected,
      bookings: room?.bookings,
      date: new Date().toLocaleDateString(),
      userID: user.id,
      userName: user.name,
      userEmail: user.email,
      userImage: user.image,
    };

    try {
      setIsPending(true);

      const { data: tokenData } = await authClient.token();
      const token = tokenData?.token;

      const result = await editRoom(updatedRoomData, room._id, token);

      if (result.modifiedCount > 0) {
        toast.success("Edited Successfully!");
        router.refresh();
      }
    } catch (error) {
      toast.error("Failed to edit room!");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Modal>
      <Button className="w-full" variant="secondary">
        <MdEdit /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Room</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Edit your room details
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <Form onSubmit={onSubmit} className="space-y-4">
                  <TextField
                    isRequired
                    defaultValue={room.name}
                    name="name"
                    type="text"
                  >
                    <Label>Room Name</Label>
                    <Input placeholder="Enter room name" />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    defaultValue={room.description}
                    name="description"
                    type="text"
                  >
                    <Label>Room Description</Label>
                    <TextArea
                      className="h-20 w-full"
                      placeholder="Write description about the room"
                    />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    defaultValue={room.image}
                    name="image"
                    type="url"
                  >
                    <Label>Image URL</Label>
                    <Input placeholder="https://..." />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    defaultValue={room.floor}
                    name="floor"
                    type="number"
                  >
                    <Label>Floor</Label>
                    <Input placeholder="Floor Number" />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    defaultValue={room.capacity}
                    name="capacity"
                    type="number"
                  >
                    <Label>Capacity</Label>
                    <Input placeholder="Number of people" />
                    <FieldError />
                  </TextField>

                  <TextField
                    isRequired
                    defaultValue={room.price}
                    name="price"
                    type="number"
                  >
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
                    <Button slot="close" type="submit" className="w-full">
                      {isPending ? (
                        <>
                          <Spinner color="current" size="sm" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <Check />
                          Edit Room
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
