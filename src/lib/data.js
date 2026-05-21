export const getAllRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`);
  const data = await res.json();
  return data;
};

export const getOneRoomByID = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const addRoom = async (formData, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
};

export const editRoom = async (formData, id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  return data;
};

export const deleteRoom = async (roomID, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${roomID}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const getMyListingsByUserID = async (usrID, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-listings/${usrID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
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

export const getMyBookingsByUserID = async (usrID, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${usrID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
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
