import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import styles from "./LibraryPage.module.css";

const LibraryPage = () => {
  const navigate = useNavigate();

  const books = [
    {
      id: 1,
      title: "채식주의자",
      author: "한강",
      current: 240,
      total: 340,
      image: "/img/im-book.png",
    },
    {
      id: 2,
      title: "급류",
      author: "정대건",
      current: 300,
      total: 500,
      image: "/img/im-book3.png",
    },
    {
      id: 3,
      title: "아몬드",
      author: "손원평",
      current: 120,
      total: 200,
      image: "/img/im-book2.png",
    },
  ];

  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };

  const getRandomFraction = () => {
    const numerator = Math.floor(Math.random() * 10) + 1; // 1 ~ 10
    const denominator = 10;
    return `${numerator}/${denominator}`;
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
            {books.map((book) => {
              const progress = Math.round((book.current / book.total) * 100);
              const fraction = getRandomFraction();

              return (
                <div
                  key={book.id}
                  className={styles.bookCard}
                  onClick={() => handleBookClick(book.id)}
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className={styles.bookImage}
                  />
                  <div className={styles.bookInfo}>
                    <span className={styles.bookTag}>북클럽</span>
                    <div className={styles.bookTitleWrapper}>
                      <h3 className={styles.bookTitle}>{book.title}</h3>
                      <div
                        className={styles.progressCircle}
                        style={{ "--progress": progress }}
                      >
                        <div className={styles.progressText}>{fraction}</div>
                      </div>
                    </div>
                    <p className={styles.bookAuthor}>{book.author}</p>
                    <div className={styles.bookProgressBar}>
                      <div
                        className={styles.bookProgressFill}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className={styles.bookProgress}>
                      <span>{`${book.current}p / ${book.total}p`}</span>
                      <span>{`${progress}%`}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            <button className={styles.moreButton}>
              <i className={`${styles.icPlus} ic-plus`}></i>
              <span>도서 추가</span>
            </button>
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default LibraryPage;
