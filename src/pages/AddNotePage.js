import React from "react";
import { addNote } from "../utils/api";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import PropTypes from "prop-types";

function AddNotePage() {
  const navigate = useNavigate();

  async function onAddNoteHandler({ title, body }) {
    await addNote({ title, body });
    navigate("/");
  }

  return (
    <div>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
}

AddNotePage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default AddNotePage;
