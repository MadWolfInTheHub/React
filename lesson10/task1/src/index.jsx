import React from "react";
import ReactDOM from "react-dom";
import Page from './App';
import './index.scss';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Page userId="facebook"/>, rootElem);