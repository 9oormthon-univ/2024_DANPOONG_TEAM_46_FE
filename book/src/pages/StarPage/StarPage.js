import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Lottie from "react-lottie-player";
import animationData from "../../assets/lottieAnimation.json"; // JSON 파일 경로
import styles from "./StarPage.module.css";

const StarPage = () => {
  const [drawCount, setDrawCount] = useState(5); // 뽑기 가능 횟수
  const [selectedStar, setSelectedStar] = useState(null); // 뽑힌 별자리
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부

  const starSigns = [
    { name: "사자자리", img: "/img/star/lion.png", active: true },
    { name: "전갈자리", img: "/img/star/scorpion.png", active: true },
    { name: "처녀자리", img: "/img/star/girl.png", active: true },
    { name: "물병자리", img: "/img/star/bottle.png", active: true },
    { name: "쌍둥이자리", img: "/img/star/twin.png", active: true },
    { name: "물고기자리", img: "/img/star/fish.png", active: true },
    { name: "양자리", img: "/img/star/lamb.png", active: false },
    { name: "황소자리", img: "/img/star/cow.png", active: false },
    { name: "게자리", img: "/img/star/crab.png", active: false },
    { name: "천칭자리", img: "/img/star/weight.png", active: false },
    { name: "염소자리", img: "/img/star/goat.png", active: false },
    { name: "궁수자리", img: "/img/star/bow.png", active: false },
  ];

  // 랜덤 별자리 뽑기
  const drawStar = () => {
    if (drawCount > 0) {
      const inactiveStars = starSigns.filter((star) => !star.active);
      const randomStar =
        inactiveStars[Math.floor(Math.random() * inactiveStars.length)];
      setSelectedStar(randomStar);
      setDrawCount(drawCount - 1);
      setShowModal(true);
    }
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedStar(null);
    setShowModal(false);
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

        {/* 하단 안내 또는 랜덤 별자리 뽑기 버튼 */}
        <div className={styles.footer}>
          {drawCount > 0 ? (
            <button
              className={styles.drawButton}
              onClick={drawStar}
              disabled={drawCount === 0}
            >
              랜덤 별자리 뽑기 ({drawCount}회 가능)
            </button>
          ) : (
            <button className={styles.disabledButton} disabled>
              책 읽고 별자리 뽑기권을 얻으세요.
            </button>
          )}
        </div>
      </div>

      {/* 랜덤 별자리 모달 */}
      {/* 랜덤 별자리 모달 */}
      {showModal && selectedStar && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {/* 확인 버튼을 최상위로 배치 */}
            <button className={styles.confirmButton} onClick={closeModal}>
              확인
            </button>

            {/* Lottie 애니메이션 */}
            <div className={styles.lottieWrapper}>
              <Lottie
                loop={false}
                animationData={animationData}
                play
                style={{
                  width: "400px",
                  height: "400px",
                }}
              />
            </div>

            {/* 별자리 아이콘 이미지 */}
            <img
              src={selectedStar.img}
              alt={selectedStar.name}
              className={styles.modalImage}
            />

            <h2>{selectedStar.name} 획득을 축하드립니다!</h2>
            <p>{new Date().toLocaleDateString()} 획득</p>
          </div>
        </div>
      )}




      {/* 네비게이션 바 */}
      <NavigationBar />
    </div>
  );
};

export default StarPage;
