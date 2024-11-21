import React from 'react'
import NavigationBar from '../components/NavigationBar'
import '../style.css'

const ClubPage = () => {
  return (
    <div className="main-page">
      <h1>북클럽</h1>
      <p>이곳은 북클럽 페이지입니다.</p>
      <NavigationBar /> {/* 네비게이션 바 포함 */}
    </div>
  )
}

export default ClubPage
