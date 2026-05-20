"use client";
import { cancelBookingByID } from "@/lib/data";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CancelBookingAlert = ({ booking }) => {
  const router = useRouter();
  const handleClick = async (bookingID) => {
    const result = await cancelBookingByID(bookingID);
    if (result.modifiedCount > 0) {
      toast.error(`${booking.roomName} Booking Cancelled!`);
      router.refresh();
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger">Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancel <strong>{booking.roomName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={() => handleClick(booking._id)}
                slot="close"
                variant="danger"
              >
                Confirm
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelBookingAlert;
