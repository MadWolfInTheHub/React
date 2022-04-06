import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import NumberList from './NumberList'

const rootElem = document.querySelector('#root');
const number = [1, 2, 3, 4, 5];

ReactDOM.render(<NumberList numbers={number}/>, rootElem);
