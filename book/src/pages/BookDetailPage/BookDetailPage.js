import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BookDetailPage.module.css';

const BookDetailPage = () => {
  const navigate = useNavigate();

  const [activeStatus, setActiveStatus] = useState('독서중'); // 독서 상태 관리
  const images = ['/gallery1.png', '/gallery2.png', '/gallery3.png', '/gallery4.png', '/gallery5.png'];

  return (
    <div className={styles.container}>
      {/* 뒤로가기 버튼 */}
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <i className="ic-back"></i>
      </button>

      {/* 책 이미지와 제목 */}
      <div className={styles.bookImageWrapper}>
        <img src="/img/im-book.png" alt="채식주의자" className={styles.bookImage} />
      </div>
      <div className={styles.bookInfo}>
        <h1 className={styles.bookTitle}>
          채식주의자
          <span className={styles.bookTag}>북클럽</span>
        </h1>
        <p className={styles.author}>한강</p>
      </div>

      <hr className={styles.divider} />

      {/* 진행도 */}
      <div className={styles.progressSection}>
        <div className={styles.progressRow}>
          <p>진행도</p>
          <p>78%</p>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: '78%' }}></div>
        </div>
        <div className={styles.progressRow}>
          <p>최근 읽은 날짜</p>
          <p>24.11.01</p>
        </div>
        <div className={styles.progressRow}>
          <p>하루 목표 페이지</p>
          <p>30P</p>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* 나의 독서 인증 */}
      <div className={styles.sectionHeader}>
        <p>나의 독서 인증</p>
        <button className={styles.moreButton}>더보기</button>
      </div>
      <div className={styles.readingImages}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`독서 인증 ${index + 1}`} className={styles.readingImage} />
        ))}
      </div>
      <button className={styles.addButton}>독서 인증하기</button>

      <hr className={styles.divider} />

      {/* 독서 상태 */}
      <div className={styles.sectionHeader}>
        <p>독서 상태</p>
      </div>
      <div className={styles.statusButtons}>
        {[
          { label: '독서중', icon: 'ic-book' },
          { label: '독서 중단', icon: 'ic-stop' },
          { label: '독서 완료', icon: 'ic-check' },
          { label: '삭제', icon: 'ic-trash' },
        ].map(({ label, icon }) => (
          <button
            key={label}
            className={`${styles.statusButton} ${activeStatus === label ? styles.activeStatus : ''}`}
            onClick={() => setActiveStatus(label)}
          >
            <i className={icon}></i>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookDetailPage;
