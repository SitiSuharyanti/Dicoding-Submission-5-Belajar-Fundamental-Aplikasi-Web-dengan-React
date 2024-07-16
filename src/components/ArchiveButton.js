import React from "react";
import { MdArchive } from "react-icons/md";
import PropTypes from "prop-types";

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="action" onClick={() => onArchive(id)} title="Arsipkan">
      <MdArchive />
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
