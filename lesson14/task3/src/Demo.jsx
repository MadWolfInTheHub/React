import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dimensions from './Dimensions';

const Demo = () => {
  const [isVisible, setisVisible] = useState(true);

  return (
    <div>
      <div>
          <button className='btn' onClick={() => setisVisible(true)}>
            Show
          </button>
          <button className='btn' onClick={() => setisVisible(false)}>
            Hide
          </button>
      </div>
      {isVisible && <Dimensions/>}
    </div>
  );
};

export default Demo;