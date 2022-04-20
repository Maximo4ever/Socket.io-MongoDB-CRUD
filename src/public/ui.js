import { deleteNote, saveNote } from "./socket.js";

const notesList = document.getElementById("notes");

const noteUI = (note) => {
  const div = document.createElement("div");
  div.innerHTML =
    //html
    `
    <div>
      <h1>${note.title}</h1>
      <div>
        <button class="btn btn-danger" data-id="${note._id}">Delete</button>
        <button class="btn btn-primary">Update</button>
      </div>
      <p>${note.description}</p>
    </div>
  `;

  const btnDelete = div.querySelector(".btn-danger");
  btnDelete.addEventListener("click", (e) => deleteNote(btnDelete.dataset.id));
  return div;
};

export const renderNotes = (notes) => {
  notesList.innerHTML = "";
  notes.forEach((note) => notesList.append(noteUI(note)));
};

const noteForm = document.getElementById("noteForm");
export const onHandleSubmit = (e) => {
  e.preventDefault();

  saveNote(noteForm["title"].value, noteForm["description"].value);
};

export const appendNote = (note) => {
  notesList.append(noteUI(note));
};
