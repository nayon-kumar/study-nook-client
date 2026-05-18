export const getAllRooms = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/rooms`);
  const data = await res.json();
  return data;
};

export const getOneRoomByID = async (id) => {
  const res = await fetch(`${process.env.SERVER_URL}/rooms/${id}`);
  const data = await res.json();
  return data;
};
