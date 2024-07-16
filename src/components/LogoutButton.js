import React from "react";
import { FiLogOut } from "react-icons/fi";
import PropTypes from "prop-types";

function LogoutButton({ logout, name }) {
  return (
    <button onClick={logout} className="button-logout">
      <FiLogOut />
      {name}
    </button>
  );
}

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default LogoutButton;
