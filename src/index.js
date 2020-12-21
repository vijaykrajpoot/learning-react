import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
const books = [
  {
    title: 'A Promised Land',
    author: 'Barack Obama ',
    bookImageUrl: 'https://m.media-amazon.com/images/I/91uwocAMtSL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    title: 'If Animals Kissed Good Night',
    author: ' Ann Whitford Paul, David WalkerAnn Whitford Paul, David Walker',
    bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._AC_SX368_.jpg'

  },{
    title: 'A Promised Land',
    author: 'Barack Obama ',
    bookImageUrl: 'https://m.media-amazon.com/images/I/91uwocAMtSL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    title: 'If Animals Kissed Good Night',
    author: ' Ann Whitford Paul, David WalkerAnn Whitford Paul, David Walker',
    bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._AC_SX368_.jpg'

  },
  {
    title: 'A Time for Mercy (Jake Brigance)',
    author: 'John Grisham',
    bookImageUrl: 'https://m.media-amazon.com/images/I/A1i8NcG05pL._AC_UY436_FMwebp_QL65_.jpg'
  },
  {
    title: 'A Time for Mercy (Jake Brigance)',
    author: 'John Grisham',
    bookImageUrl: 'https://m.media-amazon.com/images/I/A1i8NcG05pL._AC_UY436_FMwebp_QL65_.jpg'
  }
 
];


function BookList() {
  return (
    <section className='booklist' >
      {
        books.map((book) => {
          const{ bookImageUrl, title, author } = book;
          return<Book book = { book }> </Book>;
        })}
    </section>      
  );
}
//const Book = ({ bookImageUrl,title,  author }) => {
const Book = (props) => {
 console.log(props)
 const { bookImageUrl,title,author}=props.book
  return (
    <article className='book'>
      <img src={ bookImageUrl} alt=""/>
      <h1>{author}</h1>
      <h4>{title}</h4>
    </article>
  )
}

ReactDom.render(<BookList/>,document.getElementById('root'));