export const getAllRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`);
  const data = await res.json();
  return data;
};

export const getOneRoomByID = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`);
  const data = await res.json();
  return data;
};

export const addRoom = async (formData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
};

export const editRoom = async (formData, id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
};

export const deleteRoom = async (roomID) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${roomID}`,
    {
      method: "DELETE",
    },
  );
  const data = await res.json();
  return data;
};

export const getMyListingsByUserID = async (usrID) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-listings/${usrID}`,
  );
  const data = await res.json();
  return data;
};

export const bookRoom = async (formData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
};

export const getMyBookingsByUserID = async (usrID) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${usrID}`,
  );
  const data = await res.json();
  return data;
};

export const cancelBookingByID = async (bookingID) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/cancel/${bookingID}`,
    {
      method: "PATCH",
    },
  );
  const data = await res.json();
  return data;
};
