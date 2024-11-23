import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './MyLibraryPage.module.css'
import NavigationBar from '../../components/NavigationBar'

const MyLibraryPage = () => {
  const navigate = useNavigate() // useNavigate 훅 사용
  const books = [
    {
      title: '채식주의자',
      author: '한강',
      current: 240,
      total: 340,
      image: '/img/im-book.png',
    },
    {
      title: '급류',
      author: '정대건',
      current: 300,
      total: 500,
      image: '/img/im-book.png',
    },
    {
      title: '급류',
      author: '정대건',
      current: 300,
      total: 500,
      image: '/img/im-book.png',
    },

    {
      title: '급류',
      author: '정대건',
      current: 300,
      total: 500,
      image: '/img/im-book.png',
    },
    {
      title: '급류',
      author: '정대건',
      current: 300,
      total: 500,
      image: '/img/im-book.png',
    },
    {
      title: '급류',
      author: '정대건',
      current: 300,
      total: 500,
      image: '/img/im-book.png',
    },
    {
      title: '급류',
      author: '정대건',
      current: 300,
      total: 500,
      image: '/img/im-book.png',
    },
    {
      title: '급류',
      author: '정대건',
      current: 300,
      total: 500,
      image: '/img/im-book.png',
    },
    {
      title: '급류',
      author: '정대건',
      current: 300,
      total: 500,
      image: '/img/im-book.png',
    },



    // 더 많은 책 데이터 추가 가능
  ]

  return (
    <div className={styles.libraryPage}>
      {/* 상단 프로필 영역 */}
      <div className={styles.profileHeader}>
        <div className={styles.profileInfo}>
          <div className={styles.profileImage}>
            <img
              className={styles.profileImage}
              src="/img/star/lion.png"
              alt="프로필 이미지"
            />
          </div>
          <div className={styles.profileBox}>
            <h1 className={styles.profileName}>단풍톤님의 서재</h1>
            <p className={styles.starName}>사자자리</p>
          </div>
        </div>
        <i
          className={`${styles.icon} ic-setting`}
          onClick={() => navigate('/settings')}
        />
      </div>

      {/* 통계 영역 */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <i className={`${styles.icon} ic-star`} />
          <p className={styles.statText}>별자리</p>
          <p className={styles.statValue}>2개</p>
        </div>
        <div className={styles.statItem}>
          <i className={`${styles.icon} ic-book`} />
          <p className={styles.statText}>읽은 책</p>
          <p className={styles.statValue}>23권</p>
        </div>
        <div className={styles.statItem}>
          <i className={`${styles.icon} ic-club`} />
          <p className={styles.statText}>북클럽 참여횟수</p>
          <p className={styles.statValue}>3번</p>
        </div>
      </div>

      {/* 검색 및 정렬 */}
      <div className={styles.filterSection}>
        {/* 검색창 */}
        <div className={styles.inputWrapper}>
          <i className={`${styles.icon} ic-search`} />
          <input
            type="text"
            placeholder="책 제목을 입력해주세요."
            className={styles.searchInput}
          />
        </div>

        {/* 최신순 버튼 */}
        <div className={styles.sortWrapper}>
          <button className={styles.sortButton}>
            <i className={`${styles.icon} ic-filter`} />  최근 읽은 순
          </button>
        </div>
      </div>

      {/* 책 리스트 */}
      <div className={styles.bookList}>
        {books.map((book, index) => (
          <div key={index} className={styles.bookCard}>
            <img
              src={book.image}
              alt={book.title}
              className={styles.bookImage}
            />
            <div className={styles.bookInfo}>
              <span className={styles.bookTag}>북클럽</span>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}>{book.author}</p>
              <div className={styles.bookProgress}>
                <span>{`${book.current}p / ${book.total}p`}</span>
                <span>{`${Math.round(
                  (book.current / book.total) * 100
                )}%`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 네비게이션 바 */}
      <NavigationBar />
    </div>
  )
}

export default MyLibraryPage
