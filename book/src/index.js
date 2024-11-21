import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'; // 스타일 파일 경로 (필요에 따라 수정)

import App from './App'; // App.js를 가져옴

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // public/index.html의 <div id="root"></div>에 렌더링
);
