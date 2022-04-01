import React from "react";
import Avatar from "./Avatar";

const UserINfo = (props) => {
  return (
    <div className="user-info">
    <Avatar
    avatarUrl={props.avatarUrl}
    name={props.name}
    />
    <div className="user-info__name">{props.user.name}</div>
  </div>
  );
};

export default UserINfo;