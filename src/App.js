import React from "react";

import UserList from "./components/user-list/UserList";
import Header from "./components/header/Header";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <UserList />
    </React.Fragment>
  );
};

export default App;
