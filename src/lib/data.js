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
  console.log(process.env.NEXT_PUBLIC_SERVER_URL);
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
