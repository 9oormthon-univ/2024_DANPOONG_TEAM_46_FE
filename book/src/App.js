import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LibraryPage from './pages/LibraryPage/LibraryPage' // 도서관 페이지 (메인 페이지)
import ClubPage from './pages/ClubPage' // 북클럽 페이지
import StarPage from './pages/StarPage' // 별자리 페이지
import MyLibraryPage from './pages/MyLibrary/MyLibraryPage' // 내 서재 페이지
import SettingsPage from './pages/SettingsPage/SettingsPage';
import LoginPage from './pages/LoginPage'


const App = () => {
  return (
    <Router>
      <div>
        {/* 라우터 설정 */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LibraryPage />} /> {/* 메인 페이지 */}
          <Route path="/club" element={<ClubPage />} />
          <Route path="/star" element={<StarPage />} />
          <Route path="/my-library" element={<MyLibraryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
