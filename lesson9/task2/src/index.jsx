import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import App from "./App";

const rootElem = document.querySelector('#root');

/* const user = {
  name: 'Serhii',
  student: true,
  occupation: 'coconut',
  about: 'I\'m learning React',
} */

ReactDOM.render(<App /* createUser={user} *//>, rootElem);
