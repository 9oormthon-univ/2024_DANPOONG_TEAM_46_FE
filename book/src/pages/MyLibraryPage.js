import React from 'react'
import NavigationBar from '../components/NavigationBar'
import '../style.css'

const MyLibraryPage = () => {
  return (
    <div className="page-container">
      <h1>내 서재</h1>
      <p>이곳은 내 서재 페이지입니다.</p>
      <NavigationBar /> {/* 네비게이션 바 포함 */}
    </div>
  )
}

export default MyLibraryPage
