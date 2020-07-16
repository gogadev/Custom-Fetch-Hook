import React from "react";

import users from "../../assets/users.png";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <img className="users" src={users} alt="" />
      <h1 className="title">Users</h1>
    </header>
  );
};

export default Header;
