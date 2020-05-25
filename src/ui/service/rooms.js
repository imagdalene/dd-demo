import { axiosInstance } from "./index";

const roomBasePath = "/rooms";

export const getRooms = async () => {
  try {
    const { data } = await axiosInstance.get(roomBasePath);
    return data;
  } catch (error) {
    return error;
  }
};

export const getRoomDetails = async (roomId) => {
  try {
    const { data } = await axiosInstance.get(`${roomBasePath}/${roomId}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getRoomMessages = async (roomId) => {
  try {
    const { data } = await axiosInstance.get(
      `${roomBasePath}/${roomId}/messages`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const postRoomMessage = async (roomId, name, message, reaction) => {
  try {
    const { data } = await axiosInstance.post(
      `${roomBasePath}/${roomId}/messages`,
      {
        name,
        message,
        reaction,
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};
