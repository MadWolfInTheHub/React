import React from "react";
/* import moment from "moment";

const formatDate = date => moment(date, "DD MMM YYYY").fromNow(true); */
const getAge = (date) => Math.floor((new Date() - new Date(date).getTime()) / (365 * 24 * 60 * 60 * 1000))

const Greeting = (props) => {
  return (
    <div className="greeting">
    My name is {props.firstName} {props.lastName}. I'm {getAge(props.birthDate)} years old
    </div>
  );
}

export default Greeting;