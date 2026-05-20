"use client";
import { authClient } from "@/lib/auth-client";
import {
  Calendar,
  DateField,
  DatePicker,
  FieldError,
  Label,
  ListBox,
} from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Modal,
  Spinner,
  Surface,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { bookRoom } from "@/lib/data";
import toast from "react-hot-toast";

const BookNowModal = ({ room }) => {
  const dates = [
    { id: "8", name: "08:00" },
    { id: "9", name: "09:00" },
    { id: "10", name: "10:00" },
    { id: "11", name: "11:00" },
    { id: "12", name: "12:00" },
    { id: "13", name: "13:00" },
    { id: "14", name: "14:00" },
    { id: "15", name: "15:00" },
    { id: "16", name: "16:00" },
    { id: "17", name: "17:00" },
    { id: "18", name: "18:00" },
    { id: "19", name: "19:00" },
    { id: "20", name: "20:00" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [calDate, setCalDate] = useState(null);

  const [state, setState] = useState(null);
  const [endState, setEndState] = useState(null);

  const [isPending, setIsPending] = useState(false);

  const currentDate = today(getLocalTimeZone());
  const isInvalid = calDate != null && calDate.compare(currentDate) < 0;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const start = parseInt(state);
  const end = parseInt(endState);
  const hours = start && end && end > start ? end - start : 0;
  const totalCost = hours * room.price;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());

    const bookingData = {
      roomID: room?._id,
      userId: user?.id,
      userName: user?.name,
      bookingDate: formInputData.bookingDate,
      startTime: start,
      endTime: end,
      hours: hours,
      totalCost: totalCost,
      note: formInputData.note,
      status: "confirmed",
    };
    try {
      setIsPending(true);

      const result = await bookRoom(bookingData);
      if (result.insertedId) {
        toast.success(`${room.name} Room Booked Successfully!`);
        setIsOpen(false);
      }
      if (result.success === false) {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to add room!");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <Button className="w-full mt-4" onPress={() => setIsOpen(true)}>
        Book Now
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-lg">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading>Book {room.name}</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Pick a date and time slot. Bookings run on the hour.
                </p>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <Form onSubmit={onSubmit} className="space-y-4">
                    {/* Date */}
                    <DatePicker
                      isRequired
                      className="w-full"
                      isInvalid={isInvalid}
                      minValue={currentDate}
                      name="bookingDate"
                      value={calDate}
                      onChange={setCalDate}
                    >
                      <Label>Date</Label>

                      <DateField.Group fullWidth>
                        <DateField.Input>
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>

                        <DateField.Suffix>
                          <DatePicker.Trigger>
                            <div className="flex items-center justify-center w-9 h-9 cursor-pointer">
                              📅
                            </div>
                          </DatePicker.Trigger>
                        </DateField.Suffix>
                      </DateField.Group>

                      <FieldError>
                        Date must be today or in the future.
                      </FieldError>

                      <DatePicker.Popover>
                        <Calendar aria-label="Event date">
                          <Calendar.Header>
                            <Calendar.YearPickerTrigger>
                              <Calendar.YearPickerTriggerHeading />
                              <Calendar.YearPickerTriggerIndicator />
                            </Calendar.YearPickerTrigger>

                            <Calendar.NavButton slot="previous" />
                            <Calendar.NavButton slot="next" />
                          </Calendar.Header>

                          <Calendar.Grid>
                            <Calendar.GridHeader>
                              {(day) => (
                                <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                              )}
                            </Calendar.GridHeader>

                            <Calendar.GridBody>
                              {(date) => <Calendar.Cell date={date} />}
                            </Calendar.GridBody>
                          </Calendar.Grid>

                          <Calendar.YearPickerGrid>
                            <Calendar.YearPickerGridBody>
                              {({ year }) => (
                                <Calendar.YearPickerCell year={year} />
                              )}
                            </Calendar.YearPickerGridBody>
                          </Calendar.YearPickerGrid>
                        </Calendar>
                      </DatePicker.Popover>
                    </DatePicker>

                    {/* Start Time */}
                    <div className="space-y-2">
                      <Select
                        isRequired
                        className="w-full"
                        placeholder="Select time"
                        value={state}
                        onChange={(value) => setState(value)}
                      >
                        <Label>Start</Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            {dates.map((state) => (
                              <ListBox.Item
                                key={state.id}
                                id={state.id}
                                textValue={state.name}
                              >
                                {state.name}
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* End Time */}
                    <div className="space-y-2">
                      <Select
                        isRequired
                        className="w-full"
                        placeholder="Select end time"
                        value={endState}
                        onChange={(value) => setEndState(value)}
                      >
                        <Label>End</Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            {dates
                              .filter((t) => {
                                if (!state) return true;
                                return parseInt(t.id) > parseInt(state);
                              })
                              .map((t) => (
                                <ListBox.Item
                                  key={t.id}
                                  id={t.id}
                                  textValue={t.name}
                                >
                                  {t.name}
                                  <ListBox.ItemIndicator />
                                </ListBox.Item>
                              ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Note */}
                    <TextField name="note" type="text">
                      <Label>Special note (optional)</Label>
                      <TextArea
                        className="h-20 w-full"
                        placeholder="Write some note if needed"
                      />
                      <FieldError />
                    </TextField>

                    <div className="flex items-center justify-between px-4 py-2 rounded-xl gap-4 bg-gray-300">
                      <p>Total Cost: </p>
                      <p className="font-bold text-xl">${totalCost}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button type="submit" className="w-full">
                        {isPending ? (
                          <>
                            <Spinner color="current" size="sm" />
                            Booking...
                          </>
                        ) : (
                          <>
                            <Check />
                            Confirm Booking
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
    </>
  );
};

export default BookNowModal;
