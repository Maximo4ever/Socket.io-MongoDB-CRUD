import Note from "./models/Note";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit("loadnotes", notes);
    };
    emitNotes();
    socket.on("newNote", async (data) => {
      const newNote = await Note(data);
      const savedNote = await newNote.save();
      console.log(savedNote);
    });
  });
};
