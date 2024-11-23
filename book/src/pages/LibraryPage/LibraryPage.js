import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import styles from './LibraryPage.module.css';

const LibraryPage = () => {
  const navigate = useNavigate();

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
      title: '어떤 책',
      author: '작가 이름',
      current: 120,
      total: 200,
      image: '/img/im-book.png',
    },
  ];

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
          {/* 별자리 메인 이미지 */}
          <img
            className={styles.mainStar}
            src="/img/star/lion.png"
            alt="별자리 이미지"
          />
        </div>

        {/* 읽고 있는 도서 */}
        <div className={styles.readingSection}>
          <h2 className={styles.sectionTitle}>읽고 있는 도서</h2>
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
            <button className={styles.moreButton}>도서 더보기</button>
          </div>
        </div>
      </div>
      {/* 네비게이션 바 */}
      <NavigationBar />
    </div>
  );
};

export default LibraryPage;
