import { deleteNote, getNoteById, saveNote, updateNote } from "./socket.js";

const notesList = document.getElementById("notes");
const title = document.getElementById("title");
const description = document.getElementById("description");
let savedId = "";

const noteUI = (note) => {
  const div = document.createElement("div");
  div.innerHTML =
    //html
    `
    <div class="note">
      <h1>${note.title}</h1>
      <div>
        <button class="btn btn-danger" data-id="${note._id}">Delete</button>
        <button class="btn btn-primary" data-id="${note._id}">Update</button>
      </div>
      <p>${note.description}</p>
    </div>
  `;
  const btnDelete = div.querySelector(".note .btn-danger");
  btnDelete.addEventListener("click", () => deleteNote(btnDelete.dataset.id));
  const btnUpdate = div.querySelector(".note .btn-primary");
  btnUpdate.addEventListener("click", () => getNoteById(btnUpdate.dataset.id));
  return div;
};

export const renderNotes = (notes) => {
  notesList.innerHTML = "";
  notes.forEach((note) => notesList.append(noteUI(note)));
};

export const fillForm = (note) => {
  title.value = note.title;
  description.value = note.description;
  savedId = note._id;
};

export const onHandleSubmit = (e) => {
  e.preventDefault();
  if (savedId) {
    updateNote(savedId, title.value, description.value);
  } else {
    saveNote(title.value, description.value);
  }
  savedId = "";
  title.value = "";
  description.value = "";
};

export const appendNote = (note) => {
  notesList.append(noteUI(note));
};
