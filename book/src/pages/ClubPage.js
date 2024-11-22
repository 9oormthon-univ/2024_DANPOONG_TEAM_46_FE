import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";
import BookClubCard from "../components/BookClubCard";
import "../styles/layout/_club-page.scss";

const ClubPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const bookClubs = [
    {
      image: "/img/book-card-bg.png",
      title: "채식주의자 북클럽 모집...",
      participants: { current: 3, max: 6 },
      duration: "24.10.29~24.11.10",
    },
    {
      image: "/img/book-card-bg-2.png",
      title: "11월에 달라구르트 읽어요!",
      participants: { current: 5, max: 6 },
      duration: "24.10.29~24.11.10",
    },
    {
      image: "/img/book-card-bg.png",
      title: "같이 경제 책 읽어요!",
      participants: { current: 1, max: 3 },
      duration: "24.10.29~24.11.10",
    },
  ];

  const filteredClubs = bookClubs.filter((club) =>
    club.title.includes(searchValue)
  );

  return (
    <div className="club-page">
      <div className="club-header">
        <div className="club-tabs">
          <div className="active-tab">생성된 북클럽</div>
          <div className="inactive-tab">나의 북클럽</div>
        </div>
        <SearchBar placeholder="책 제목을 입력해주세요." onSearch={handleSearch} />
      </div>
      <div className="club-list">
        {filteredClubs.map((club, index) => (
          <BookClubCard key={index} {...club} />
        ))}
      </div>
      <NavigationBar />
    </div>
  );
};

export default ClubPage;
