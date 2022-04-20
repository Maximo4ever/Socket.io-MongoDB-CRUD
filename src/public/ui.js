import { saveNote } from "./sockets.js";

const noteForm = document.getElementById("noteForm");
export const onHandleSubmit = (e) => {
  e.preventDefault();

  saveNote(noteForm["title"].value, noteForm["description"].value);
};
