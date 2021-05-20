import { v4 as uuidv4 } from "uuid";

export class contactMessage {
  id: string = uuidv4();
  name: string;
  email: string;
  message: string;
  constructor(name: string, email: string, message: string) {
    this.name = name;
    this.email = email;
    this.message = message;
  }
}
