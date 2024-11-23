import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './MyLibraryPage.module.css'
import NavigationBar from '../../components/NavigationBar'

const MyLibraryPage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('내서재')

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
  ]

  const galleryData = [
    {
      date: '2024.11.17',
      images: [
        '/img/gallery1.png',
        '/img/gallery2.png',
        '/img/gallery3.png',
        '/img/gallery4.png',
        '/img/gallery5.png',
      ],
    },
    {
      date: '2024.11.16',
      images: ['/img/gallery6.png', '/img/gallery7.png'],
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
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

        {/* 탭 버튼 */}
        <div className={styles.tabButtons}>
          <button
            className={`${styles.tabButton} ${
              activeTab === '내서재' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('내서재')}
          >
            내서재
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === '인증갤러리' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('인증갤러리')}
          >
            인증갤러리
          </button>
        </div>

        {/* 검색 및 정렬 */}
        <div className={styles.filterSection}>
          <div className={styles.inputWrapper}>
            <i className={`${styles.icon} ic-search`} />
            <input
              type="text"
              placeholder="책 제목을 입력해주세요."
              className={styles.searchInput}
            />
          </div>
          <div className={styles.sortWrapper}>
            <button className={styles.sortButton}>
              <i className={`${styles.icon} ic-filter`} /> 최근 읽은 순
            </button>
          </div>
        </div>

        {/* 컨텐츠 영역 */}
        {activeTab === '내서재' ? (
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
        ) : (
          <div className={styles.galleryList}>
            {galleryData.map((entry, index) => (
              <div key={index} className={styles.galleryEntry}>
                <p className={styles.galleryDate}>{entry.date}</p>
                <div className={styles.galleryImages}>
                  {entry.images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`Gallery ${index + 1} Image ${i + 1}`}
                      className={styles.galleryImage}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* 네비게이션 바 */}
      <NavigationBar />
    </div>
  )
}

export default MyLibraryPage
