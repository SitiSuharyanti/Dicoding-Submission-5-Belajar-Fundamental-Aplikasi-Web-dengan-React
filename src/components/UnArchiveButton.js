import React from "react";
import { MdUnarchive } from "react-icons/md";
import PropTypes from "prop-types";

function UnArchiveButton({ id, onUnArchive }) {
  return (
    <button className="action" onClick={() => onUnArchive(id)} title="Aktifkan">
      <MdUnarchive />
    </button>
  );
}

UnArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnArchive: PropTypes.func.isRequired,
};

export default UnArchiveButton;
