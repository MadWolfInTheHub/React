import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
const rootElement = document.querySelector('#root');

/* const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  [
    React.createElement(
      'h1',
      {className: 'greeting__title'},
      'Hello, world!'
    ),
    React.createElement(
      'p',
      { className: 'greeting__text' },
      "I'm learning React"
    )
  ]
);

ReactDOM.render(greetingElem, rootElement); */

const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);
console.log(element);

ReactDOM.render(element, rootElement);
