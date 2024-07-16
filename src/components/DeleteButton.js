import React from "react";
import { IoMdTrash } from "react-icons/io";
import { PropTypes } from "prop-types";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="action" onClick={() => onDelete(id)} title="Hapus">
      <IoMdTrash />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
