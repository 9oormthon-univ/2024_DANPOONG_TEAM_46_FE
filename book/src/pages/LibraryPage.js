import React from 'react'
import NavigationBar from '../components/NavigationBar'
import ProfileHeader from '../components/ProfileHeader'
import BookCard from '../components/BookCard' // BookCard 컴포넌트 임포트
import '../styles/layout/_library-page.scss' // 라이브러리 페이지 스타일 경로
import '../style.css'

const LibraryPage = () => {
  // 사용자 데이터
  const user = {
    nickname: '단풍톤',
    starName: '사자자리',
    profileImage: '/star/girl.png',
    starImage: '/star/girl.png',
  }

  // 도서 데이터
  const books = [
    {
      title: '채식주의자',
      author: '한강',
      progress: 78,
      currentPages: 240,
      totalPages: 340,
      tag: '북클럽',
    },
    {
      title: '급류',
      author: '정대건',
      progress: 45,
      currentPages: 451,
      totalPages: 1000,
    },
  ]

  // 도서 추가 버튼 핸들러
  const handleAddBook = () => {
    console.log('도서 추가하기 버튼 클릭')
  }

  return (
    <div className="library-page">
      {/* 프로필 헤더 */}
      <ProfileHeader {...user} />

      {/* 섹션 제목 */}
      <div className="section-title">읽고 있는 도서</div>

      {/* 북카드 섹션 */}
      <div className="book-slider">
        {books.map((book, index) => (
          <BookCard key={index} book={book} /> // BookCard 컴포넌트로 각 도서 데이터 렌더링
        ))}
        <div className="add-book-btn" onClick={handleAddBook}>
          + 도서 추가하기
        </div>
      </div>

      {/* 네비게이션 바 */}
      <NavigationBar />
    </div>
  )
}

export default LibraryPage
