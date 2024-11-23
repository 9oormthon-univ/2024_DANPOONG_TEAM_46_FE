import React from 'react'
import NavigationBar from '../components/NavigationBar'
import '../style.css'

const StarPage = () => {
  return (
    <div>
      <h1>별자리</h1>
      <p>이곳은 별자리 페이지입니다.</p>
      <NavigationBar /> {/* 네비게이션 바 포함 */}
    </div>
  )
}

export default StarPage
