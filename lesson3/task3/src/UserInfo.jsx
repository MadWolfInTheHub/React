import React from "react";
import UserAvatar from "./UserAvatar";

const UserINfo = (props) => {
  return (
    <div className="user-info">
    <UserAvatar
    avatarUrl={props.avatarUrl}
    name={props.name}
    />
    <div className="user-info__name">{props.user.name}</div>
  </div>
  );
};

export default UserINfo;