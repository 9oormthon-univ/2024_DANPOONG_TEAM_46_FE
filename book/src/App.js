import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LoginPage from './pages/LoginPage';
import LibraryPage from './pages/LibraryPage'; // 1번 페이지
import ClubPage from './pages/ClubPage'; // 2번 페이지
import StarPage from './pages/StarPage'; // 3번 페이지
import MyLibraryPage from './pages/MyLibraryPage'; // 4번 페이지
import './styles/modules/_transitions.scss'; // 전환 애니메이션 스타일

const AnimatedRoutes = () => {
  const location = useLocation();
  const paths = ['/', '/club', '/star', '/my-library']; // 페이지 경로 순서
  const currentIndex = paths.indexOf(location.pathname);
  const previousIndex = location.state?.previousIndex ?? currentIndex;

  const direction = currentIndex > previousIndex ? 'slide-left' : 'slide-right'; // 이동 방향 계산

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames={direction}
          timeout={500}
        >
          <Routes location={location}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<LibraryPage />} />
            <Route path="/club" element={<ClubPage />} />
            <Route path="/star" element={<StarPage />} />
            <Route path="/my-library" element={<MyLibraryPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
