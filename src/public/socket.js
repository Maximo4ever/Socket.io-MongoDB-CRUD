const socket = io();

export const loadNotes = (callback) => {
  socket.on("server:loadNotes", callback);
};
export const saveNote = (title, description) => {
  socket.emit("client:newNote", { title, description });
};
export const onNewNote = (callback) => {
  socket.on("server:newNote", callback);
};
export const deleteNote = (id) => {
  socket.emit("client:deleteNote", id);
};
