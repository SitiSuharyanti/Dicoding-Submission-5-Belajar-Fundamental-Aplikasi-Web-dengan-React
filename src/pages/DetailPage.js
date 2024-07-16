import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNote from "../components/DetailNote";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/api";
import PropTypes from "prop-types";
import NotFoundPage from "./NotFoundPage";
import { FadeLoader } from "react-spinners";

function DetailPageWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();

  function onDeleteHandler(id) {
    deleteNote(id);
    navigate("/");
  }

  function onArchiveHandler(id) {
    archiveNote(id);
    navigate("/");
  }

  function onUnArchiveHandler(id) {
    unarchiveNote(id);
    navigate("/");
  }

  return <DetailPage id={id} onDelete={onDeleteHandler} onArchive={onArchiveHandler} onUnArchive={onUnArchiveHandler} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return {
        note: data,
        loading: false,
      };
    });
  }

  render() {
    if (this.state.loading) {
      return <FadeLoader color="#36d7b7" className="loading" />;
    }

    return this.state.note === null ? <NotFoundPage /> : <DetailNote {...this.state.note} onDelete={deleteNote} onArchive={archiveNote} onUnArchive={unarchiveNote} />;
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnArchive: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
