import React from 'react';
import NavigationBar from '../../components/NavigationBar'; // 네비게이션 컴포넌트
import styles from './MyLibrary.module.css'; // CSS 모듈을 불러옵니다.

const MyLibraryPage = () => {
  return (
    <div className={styles.myLibraryPage}>
      {/* 헤더 */}
      <header className={styles.header}>
        <div className={styles.profile}>
          <img
            src="/img/star/profile.jpg"
            alt="Profile"
            className={styles.profileImage}
          />
          <div className={styles.profileInfo}>
            <h2>단풍톤님의 서재</h2>
            <p>사자자리</p>
          </div>
        </div>
        <i className={`${styles.settingsIcon} ic-settings`}></i>
      </header>

      {/* 주요 정보 섹션 */}
      <div className={styles.statsSection}>
        <div className={styles.stat}>
          <p>별자리</p>
          <h3>2개</h3>
        </div>
        <div className={styles.stat}>
          <p>읽은 책</p>
          <h3>23권</h3>
        </div>
        <div className={styles.stat}>
          <p>북클럽 참여횟수</p>
          <h3>3번</h3>
        </div>
      </div>

      {/* 검색 바 */}
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="책 제목을 입력해주세요."
          className={styles.searchBar}
        />
        <button className={styles.sortButton}>
          <i className="ic-sort"></i>
          최신순
        </button>
      </div>

      {/* 책 리스트 */}
      <div className={styles.booksSection}>
        <div className={styles.bookCard}>
          <img src="/img/book-card-bg.png" alt="채식주의자" />
          <div className={styles.bookInfo}>
            <p className={styles.bookTag}>북클럽</p>
            <p className={styles.bookTitle}>채식주의자</p>
            <p className={styles.bookAuthor}>한강</p>
            <div className={styles.progressBar}>
              <span>240p / 340p</span>
              <span>100%</span>
            </div>
          </div>
        </div>
        {/* 추가 책 카드 작성 가능 */}
      </div>

      {/* 네비게이션 */}
      <NavigationBar />
    </div>
  );
};

export default MyLibraryPage;
