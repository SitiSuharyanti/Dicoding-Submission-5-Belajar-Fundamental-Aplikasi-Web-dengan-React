import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Link } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import AddNotePage from "./pages/AddNotePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";
import ArchivePage from "./pages/ArchivePage";
import RegisterPage from "./pages/RegisterPage";
import { ThemeProvider } from "./context/ThemeContext";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import ThemeButton from "./components/ThemeButton";
import LogoutButton from "./components/LogoutButton";
import { LocaleProvider } from "./context/LocaleContext";
import LocaleButton from "./components/LocaleButton";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem("theme") || "light",
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return {
            theme: newTheme,
          };
        });
      },
      localeContext: {
        locale: localStorage.getItem("locale") || "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === "id" ? "en" : "id";
            localStorage.setItem("locale", newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: prevState.localeContext.locale === "id" ? "en" : "id",
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    putAccessToken("");
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });

    document.documentElement.setAttribute("data-theme", this.state.theme);
  }

  componentDidUpdate(prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute("data-theme", this.state.theme);
    }
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <ThemeProvider value={this.state}>
            <div className="app-container">
              <header className="">
                <h1>
                  <Link to="/">{this.state.localeContext.locale === "id" ? "Aplikasi Catatan" : "Notes App"}</Link>
                </h1>
                <LocaleButton />
                <ThemeButton />
              </header>
              <main>
                <Routes>
                  <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                  <Route path="/register" element={<RegisterPage />} />
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </LocaleProvider>
      );
    }

    return (
      <LocaleProvider value={this.state.localeContext}>
        <ThemeProvider value={this.state}>
          <div className="app-container">
            <header>
              <h1>
                <Link to="/">{this.state.localeContext.locale === "id" ? "Aplikasi Catatan" : "Notes App"}</Link>
              </h1>
              <Navigation />
              <LocaleButton />
              <ThemeButton />
              <LogoutButton logout={this.onLogout} name={this.state.authedUser.name} />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notes/:id" element={<DetailPage />} />
                <Route path="/notes/new" element={<AddNotePage />} />
                <Route path="/archives" element={<ArchivePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}

export default App;
