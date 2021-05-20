import type { contactMessage } from "../models/contactMessage";
import axios from "./axios";

export async function SendMessage(newMessage: contactMessage) {
  await axios
    .post("/api/Contacts/new-message", newMessage)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
  return null;
}
