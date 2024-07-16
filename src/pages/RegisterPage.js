import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterAccount from "../components/RegisterAccount";
import { LocaleConsumer } from "../context/LocaleContext";
import { register } from "../utils/api";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section>
            <h2>{locale === "id" ? "Isi form untuk mendaftar akun." : "Fill the form to register account."}</h2>
            <RegisterAccount register={onRegisterHandler} />
            <p>
              {locale === "id" ? "Sudah punya akun? " : "Already have an account? "} <Link to="/">{locale === "id" ? "Login di sini" : "Login here"}</Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default RegisterPage;
