import React from "react";
import Useritem from "./Useritem";
import Spinner from "../components/layout/Spinner";
import PropTypes from "prop-types";

const Users = (props) => {
  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {props.users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.protoTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
