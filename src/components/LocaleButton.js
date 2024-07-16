import { MdGTranslate } from "react-icons/md";
import { LocaleConsumer } from "../context/LocaleContext";

function LocaleButton() {
  return (
    <LocaleConsumer>
      {({ toggleLocale }) => {
        return (
          <button className="toggle-locale" onClick={toggleLocale}>
            <MdGTranslate />
          </button>
        );
      }}
    </LocaleConsumer>
  );
}

export default LocaleButton;
