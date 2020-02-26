import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const books = [
  {
    id: 1,
    title: "Lord of the rings",
    author: "J.R.R. Tolkien",
    year: 2017
  },
  {
    id: 2,
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    year: 2014
  },
  {
    id: 3,
    title: "Game of Thrones",
    author: "J.R.R. Martyn",
    year: 2014
  } 
];

var foo = [1, 2, 3, 4]


function BookList(props){
  const {books} = props;
  return (
    <ul>
      {
        books.map(book => (
          <li>
            <h5>Title: {book.title}</h5>
            <h6>Author: {book.author}</h6>
          </li>
        ))
      }
    </ul>
  )
}


ReactDOM.render(
  <BookList books={books} />,
  document.getElementById('root')
);