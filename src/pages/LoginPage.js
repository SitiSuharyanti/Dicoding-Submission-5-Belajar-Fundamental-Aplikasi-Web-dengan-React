import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginAccount from "../components/LoginAccount";
import { login } from "../utils/api";
import { LocaleConsumer } from "../context/LocaleContext";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section>
            <h2>{locale === "id" ? "Yuk, login untuk menggunakan aplikasi." : "Login to use app, please."}</h2>
            <LoginAccount login={onLogin} />
            <p>
              {locale === "id" ? "Belum punya akun? " : "Don't have an account? "}
              <Link to="/register">{locale === "id" ? "Daftar di sini." : "Register here"}</Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
