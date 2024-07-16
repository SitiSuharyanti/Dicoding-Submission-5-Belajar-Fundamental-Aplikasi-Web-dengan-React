import React from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/api";
import SearchNote from "../components/SearchNote";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../context/LocaleContext";

function HomePageWrapper() {
  const [searchParams, setSearchparams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchparams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return { keyword };
    });

    this.props.keywordChange(keyword);
  }

  async componentDidMount() {
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        notes: data,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <div>
              <h2>{locale === "id" ? "Catatan Arsip" : "Archived Note"}</h2>
              <SearchNote keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
              {notes.length !== 0 ? (
                <NoteList notes={notes} />
              ) : (
                <div className="notes-list-empty">
                  <p>{locale === "id" ? "Tidak ada catatan" : "No notes"}</p>
                </div>
              )}
            </div>
          );
        }}
      </LocaleConsumer>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
