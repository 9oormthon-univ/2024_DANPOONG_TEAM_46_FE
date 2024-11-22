import React from 'react'
import BookCard from './BookCard'
import '../styles/modules/_book-slider.scss'

const BookSlider = ({ books }) => {
  return (
    <div className="book-slider">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
      <div className="add-book-btn">+ 도서 추가하기</div>
    </div>
  )
}

export default BookSlider
