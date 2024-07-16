import React from "react";
import { showFormattedDate } from "../utils/index";
import DeleteButton from "./DeleteButton";
import PropTypes from "prop-types";
// import parser from "html-react-parser";
import ArchiveButton from "./ArchiveButton";
import UnArchiveButton from "./UnArchiveButton";

function DetailNote({ title, createdAt, body, id, onDelete, onArchive, onUnArchive, archived }) {
  return (
    <div className="detail-page ">
      <h2 className="detail-page__title">{title}</h2>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <div className="detail-page__action">
        {archived ? <UnArchiveButton id={id} onUnArchive={onUnArchive} /> : <ArchiveButton id={id} onArchive={onArchive} />}
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

DetailNote.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool,
};

export default DetailNote;
