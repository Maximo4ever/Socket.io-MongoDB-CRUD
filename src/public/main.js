import { loadNotes, onNewNote, selectedNote } from "./socket.js";
import { onHandleSubmit, renderNotes, appendNote, fillForm } from "./ui.js";

onNewNote(appendNote);
loadNotes(renderNotes);
selectedNote(fillForm);

const noteForm = document.getElementById("noteForm");
noteForm.addEventListener("submit", onHandleSubmit);
