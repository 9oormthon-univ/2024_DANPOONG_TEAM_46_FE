import React from 'react'
import NavigationBar from '../components/NavigationBar' // 네비게이션 바 가져오기
import '../style.css' // 스타일 가져오기

const LibraryPage = () => {

  return (
    <div>
      <h1>도서관</h1>
      <p>이곳은 도서관 페이지입니다.</p>
      <NavigationBar /> {/* 네비게이션 바 포함 */}
    </div>
  )
}

export default LibraryPage
