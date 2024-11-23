import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import styles from './LibraryPage.module.css';

const LibraryPage = () => {
  const navigate = useNavigate();

  const books = [
    {
      id: 1, // 고유 ID 추가
      title: '채식주의자',
      author: '한강',
      current: 240,
      total: 340,
      image: '/img/im-book.png',
    },
    {
      id: 2,
      title: '급류',
      author: '정대건',
      current: 300,
      total: 500,
      image: '/img/im-book3.png',
    },
    {
      id: 3,
      title: '아몬드',
      author: '손원평',
      current: 120,
      total: 200,
      image: '/img/im-book2.png',
    },
  ];

  const handleBookClick = (id) => {
    navigate(`/book/${id}`); // 클릭 시 해당 도서의 ID로 상세 페이지로 이동
  };

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
              <h1 className={styles.profileName}>단풍톤님 반가워요!</h1>
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
          <h2 className={styles.sectionTitle}> 읽고 있는 도서</h2>
          <div className={styles.bookList}>
            {books.map((book) => (
              <div
                key={book.id}
                className={styles.bookCard}
                onClick={() => handleBookClick(book.id)} // 카드 클릭 이벤트 추가
              >
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
            <button className={styles.moreButton}>
              <i className={`${styles.icPlus} ic-plus`}></i>
              <span>도서 추가</span>
            </button>
          </div>
        </div>
      </div>
      {/* 네비게이션 바 */}
      <NavigationBar />
    </div>
  );
};

export default LibraryPage;
