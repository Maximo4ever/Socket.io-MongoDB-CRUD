import { loadNotes, onNewNote } from "./sockets.js";
import { onHandleSubmit, renderNotes, appendNote } from "./ui.js";

onNewNote(appendNote);
loadNotes(renderNotes);
noteForm.addEventListener("submit", onHandleSubmit);
