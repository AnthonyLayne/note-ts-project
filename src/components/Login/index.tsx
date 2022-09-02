import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { logIn, logOut } from "../../redux/actions";

const Login = ({ logIn, logOut }) => {
  const { loginState, setLoginState } = useState();

  const onLoginClick = () => {
    setLoginState(() => logIn);
  };

  return (
    <div className="login-page-wrapper">
      <form>
        Please log in to view your notes.
        <input className="username-input" placeholder="username" />
        <input className="password-input" placeholder="password" />
        <button className="login-button" placeholder="Login" onClick={onLoginClick} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
});

export default connect(mapStateToProps, { logIn, logOut })(Login);
