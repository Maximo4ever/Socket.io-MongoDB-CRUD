import Note from "./models/Note";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit("server:loadNotes", notes);
    };
    emitNotes();
    socket.on("client:newNote", async (data) => {
      const newNote = await Note(data);
      const savedNote = await newNote.save();
      socket.emit("server:newNote", savedNote);
    });
  });
};
