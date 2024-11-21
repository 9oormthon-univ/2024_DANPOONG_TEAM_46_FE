import React from "react";
import NavigationBar from "../components/NavigationBar";
import "../styles/layout/_star-page.scss";

const StarPage = () => {
  const starSigns = [
    { name: "사자자리", img: "/star/lion.png", active: true },
    { name: "전갈자리", img: "/star/scorpion.png", active: true },
    { name: "처녀자리", img: "/star/girl.png", active: true },
    { name: "물병자리", img: "/star/bottle.png", active: true },
    { name: "쌍둥이자리", img: "/star/twin.png", active: true },
    { name: "물고기자리", img: "/star/fish.png", active: true },
    { name: "양자리", img: "/star/lamb.png", active: false },
    { name: "황소자리", img: "/star/cow.png", active: false },
    { name: "게자리", img: "/star/crab.png", active: false },
    { name: "천칭자리", img: "/star/weight.png", active: false },
    { name: "염소자리", img: "/star/goat.png", active: false },
    { name: "궁수자리", img: "/star/bow.png", active: false },
  ];

  return (
    <div className="star-page">
      {/* 상단 사용자 정보 */}
      <div className="header">
        <div className="user-info">
          <img
            className="profile-image"
            src="/star/lion.png"
            alt="사자자리"
          />
          <div>
            <h1 className="username">키위시리님</h1>
            <p className="subtitle">전갈자리</p>
          </div>
        </div>
      </div>

      {/* 별자리 카드들 */}
      <div className="star-grid">
        {starSigns.map((sign, index) => (
          <div
            key={index}
            className={`star-card ${sign.active ? "active" : "inactive"}`}
          >
            <img src={sign.img} alt={sign.name} />
            <p>{sign.name}</p>
          </div>
        ))}
      </div>

      {/* 하단 안내 텍스트 */}
      <div className="footer">
        <p>책 읽고 별자리 불가침을 얻으세요.</p>
      </div>

      {/* 하단 네비게이션 */}
      <NavigationBar />
    </div>
  );
};

export default StarPage;
