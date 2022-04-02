import React from "react";
import moment from "moment";
import './index.scss';

const formatDate = date => moment(date).format("DD MMM YYYY");

const Profile = (props) => {
  return (
    <>
      <div className="profile">
        <div className="profile__name">{props.userData.firstName} {props.userData.lastName}</div>
        <div className="profile__birth">Was burm {formatDate(props.birthDate)} in {props.userData.birthPlace}</div>
      </div>
    </>
  );
};

export default Profile;