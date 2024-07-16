import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginAccount({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  async function onSubmitHandler(event) {
    event.preventDefault();

    await login({
      email: email,
      password: password,
    });
  }

  return (
    <form onSubmit={onSubmitHandler} className="input-login">
      <label>Email</label>
      <input type="email" value={email} onChange={onEmailChange} />
      <label>Password</label>
      <input type="password" value={password} onChange={onPasswordChange} />
      <button>Login</button>
    </form>
  );
}

LoginAccount.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginAccount;
