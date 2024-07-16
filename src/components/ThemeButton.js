import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeConsumer } from "../context/ThemeContext";

function ThemeButton() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default ThemeButton;
