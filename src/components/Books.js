import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const Books = (props) => {
  const { books } = props;
  const booklists = books.map((book) => (
    <BookCard
      key={book.id}
      id={book.id}
      name={book.title}
      author={book.author}
      // category={book.category}
    />
  ));
  return (
    booklists
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

Books.defaultProps = {
  books: [],
};

export default Books;
