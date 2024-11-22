import React from 'react';
import '../styles/modules/_book-card.scss';
import CircleProgressBar from './CircleProgressBar';
import ProgressBar from './ProgressBar';
import '../style.css'

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      {/* 도서 태그 */}
      {book.tag && <div className="book-tag">{book.tag}</div>}

      {/* 도서 제목 및 저자 */}
      <div className="content">
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
      </div>

      {/* 원형 진행률 */}
      <div className="progress-section">
        <CircleProgressBar
          progress={book.progress}
          total={book.totalPages}
          current={book.currentPages}
        />
      </div>

      {/* 하단 진행바 */}
      <div className="progress-bar-section">
        <ProgressBar progress={(book.currentPages / book.totalPages) * 100} />
        <div className="progress-details">
          <span>{`${book.currentPages}p / ${book.totalPages}p`}</span>
          <span>{`${Math.round(
            (book.currentPages / book.totalPages) * 100
          )}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
