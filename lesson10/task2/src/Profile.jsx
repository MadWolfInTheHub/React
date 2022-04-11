import React from "react";
import Userform from "./UserForm";

const Profile = ({ userData, handleChange }) => {
  return ( 
    <div className="column">
      <Userform userData={userData} handleChange={handleChange}/>
    </div>
  );
};

export default Profile;