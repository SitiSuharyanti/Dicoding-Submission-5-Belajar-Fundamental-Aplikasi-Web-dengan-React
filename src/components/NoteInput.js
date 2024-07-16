import React from "react";
import PropTypes from "prop-types";
import SaveButton from "./SaveButton";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onInputHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="add-new-page__input">
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" className="add-new-page__input__title" placeholder="Masukkan Judul" value={this.state.title} onChange={this.onTitleChangeHandler} />
          <div className="add-new-page__input__body" data-placeholder="Ketik Deskripsi...." contentEditable onInput={this.onInputHandler} />
          <SaveButton />
        </form>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
