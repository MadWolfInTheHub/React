import React from 'react';
import ReactDOM from 'react-dom';
import Comment from "./comment.jsx";
import './styles.scss';

const rootElem = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com'
}

ReactDOM.render(
    <Comment 
    author={userInfo} 
    text='Good job!' 
    date={new Date('2019-01-01T11:32:19.566Z')}
    />,
    rootElem
);