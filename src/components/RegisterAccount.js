import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterAccount({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPassword] = useInput("");

  async function onSubmitHandler(event) {
    event.preventDefault();

    await register({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <form onSubmit={onSubmitHandler} className="input-register">
      <label>Name</label>
      <input type="text" value={name} onChange={onNameChange} />
      <label>Email</label>
      <input type="email" value={email} onChange={onEmailChange} />
      <label>Password</label>
      <input type="password" value={password} onChange={onPasswordChange} />
      <label>Confirm Password</label>
      <input type="password" value={confirmPassword} onChange={onConfirmPassword} />
      <button>Register</button>
    </form>
  );
}

RegisterAccount.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterAccount;
