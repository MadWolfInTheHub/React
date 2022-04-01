import React from "react";
import moment from "moment";

const formatDate = date => moment(date, "DD MMM YYYY").fromNow(true);

const Greeting = (props) => {
  return (
    <div className="greeting">
    My name is {props.firstName} {props.lastName}. I'm {formatDate(props.birthDate)} old
    </div>
  );
}

export default Greeting;