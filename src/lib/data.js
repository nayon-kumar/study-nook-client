export const getAllRooms = async (filters = {}) => {
  const query = new URLSearchParams();

  if (filters.search) query.append("search", filters.search);
  if (filters.minPrice) query.append("minPrice", filters.minPrice);
  if (filters.maxPrice) query.append("maxPrice", filters.maxPrice);
  if (filters.amenities) query.append("amenities", filters.amenities);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?${query.toString()}`,
    {
      cache: "no-store",
    },
  );

  return res.json();
};

export const getLatestRooms = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/latest`,
    {
      cache: "no-store",
    },
  );
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

export const bookRoom = async (formData, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
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

export const cancelBookingByID = async (bookingID, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/cancel/${bookingID}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};
