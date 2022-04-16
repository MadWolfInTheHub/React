import React, { useState } from 'react';
import moment from 'moment';
import { useEffect } from 'react/cjs/react.production.min';


const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

const formatDate = date => moment(date).format('LTS');

const Clock = props => {
  const [counter, setCounter] = useState({
    time: formatDate(getTimeWithOffset(props.offset))
  });
    
  setInterval(() => {
    setCounter({
     time: formatDate(getTimeWithOffset(props.offset))
    }); 
  }, 1000)

  return (
    <div className="clock">
      <div className="clock__location">
        {props.location}
      </div>
      <div className="clock__time">
        {counter.time}
      </div>
    </div>
  );
}

export default Clock;