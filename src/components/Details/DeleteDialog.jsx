"use client";
import { deleteRoom } from "@/lib/data";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteDialog = ({ room }) => {
  const router = useRouter();
  const handleDelete = async (roomID) => {
    const result = await deleteRoom(roomID);
    if (result.deletedCount > 0) {
      toast.error("Room Deleted!");
      router.push("/my-listings");
    }
  };

  return (
    <AlertDialog>
      <Button className="w-full" variant="danger">
        <RiDeleteBinLine /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete room permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{room.name} Room</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(room._id)}
                slot="close"
                variant="danger"
              >
                Delete Room
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteDialog;
