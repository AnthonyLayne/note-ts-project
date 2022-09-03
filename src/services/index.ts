import axios from "axios";
import { Note } from "types";

const LOCAL_DEV_URI = "http://localhost";

const isDev = () => window.location.href.includes(LOCAL_DEV_URI);

const BASE_URI = isDev() ? LOCAL_DEV_URI : "www.exmaple.com";

export const apiCreateNote = (note: Pick<Note, "title" | "description">) =>
  axios.post<Note>(`${BASE_URI}/create`, note).then(({ data }) => data);
