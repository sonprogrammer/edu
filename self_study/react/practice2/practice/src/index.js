import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './chapter/Library';
// import Clock from './chapter2/Clock';
// import CommentList from './chapter3/CommentList';
// import Counter from './chapter4/useState';
// import State from './hooks/useState2';
// import Count from './hooks/useEffect2';
import Timer from './hooks/useEffect3';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
