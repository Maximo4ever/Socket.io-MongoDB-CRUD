import { loadNotes } from "./sockets.js";
import { onHandleSubmit } from "./ui.js";

loadNotes();
noteForm.addEventListener("submit", onHandleSubmit);
