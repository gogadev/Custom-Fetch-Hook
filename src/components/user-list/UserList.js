import React, { useRef } from "react";
import useFetch from "../../custom-hooks/useFetch";

import spinner from "../../assets/spinner.gif";

import "./user-list.style.css";

const UserList = () => {
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    isComponentMounted,
    []
  );

  return (
    <div className="user-list">
      {loading ? (
        <div className="spinner">
          <img className="spinner-img" src={spinner} alt="" />
        </div>
      ) : (
        data.map((user) => (
          <div key={user.id} className="card">
            <h4 className="name">{user.name}</h4>
            <h5 className="email">{user.email}</h5>
            <h5 className="company">Company: {user.company.name}</h5>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
