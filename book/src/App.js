import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './pages/TestPage'; // TestPage 컴포넌트 가져오기

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 기본 경로 */}
        <Route path="/" element={<h1>Home Page</h1>} />
        {/* 테스트 페이지 경로 */}
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
};

export default App;
