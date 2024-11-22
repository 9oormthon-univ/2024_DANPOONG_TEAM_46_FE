import React from "react";



const BookClubCard = ({ image, title, participants, duration }) => {
  return (
    <div className="book-club-card">
      <img src={image} alt={title} className="book-image" />
      <div className="book-info">
        <div className="book-title">{title}</div>
        <div className="book-participants">
          {participants.current}/{participants.max}
        </div>
        <div className="book-duration">{duration}</div>
      </div>
    </div>
  );
};

export default BookClubCard;
