import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function AddButton() {
  return (
    <div className="homepage__action">
      <button className="action" title="Tambah">
        <Link to={`/notes/new`}>
          <FiPlus className="action" />
        </Link>
      </button>
    </div>
  );
}

export default AddButton;
