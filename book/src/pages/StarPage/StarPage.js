import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import styles from './StarPage.module.css'; // 스타일 가져오기

const StarPage = () => {
  const starSigns = [
    { name: '사자자리', img: '/img/star/lion.png', active: true },
    { name: '전갈자리', img: '/img/star/scorpion.png', active: true },
    { name: '처녀자리', img: '/img/star/girl.png', active: true },
    { name: '물병자리', img: '/img/star/bottle.png', active: true },
    { name: '쌍둥이자리', img: '/img/star/twin.png', active: true },
    { name: '물고기자리', img: '/img/star/fish.png', active: true },
    { name: '양자리', img: '/img/star/lamb.png', active: false },
    { name: '황소자리', img: '/img/star/cow.png', active: false },
    { name: '게자리', img: '/img/star/crab.png', active: false },
    { name: '천칭자리', img: '/img/star/weight.png', active: false },
    { name: '염소자리', img: '/img/star/goat.png', active: false },
    { name: '궁수자리', img: '/img/star/bow.png', active: false },
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
        </div>

        {/* 별자리 카드 영역 */}
        <div className={styles.starGrid}>
          {starSigns.map((sign, index) => (
            <div
              key={index}
              className={`${styles.starCard} ${
                sign.active ? styles.active : styles.inactive
              }`}
            >
              <img src={sign.img} alt={sign.name} />
              <p>{sign.name}</p>
            </div>
          ))}
        </div>

        {/* 하단 안내 텍스트 */}
        <div className={styles.footer}>
          <p>책을 읽고 별자리의 힘을 키워보세요.</p>
        </div>
      </div>

      {/* 네비게이션 바 */}
      <NavigationBar />
    </div>
  );
};

export default StarPage;
