import { loadNotes, onNewNote } from "./socket.js";
import { onHandleSubmit, renderNotes, appendNote } from "./ui.js";

onNewNote(appendNote);
loadNotes(renderNotes);
noteForm.addEventListener("submit", onHandleSubmit);
