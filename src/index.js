import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
const firstBook = {
  title : 'A Promised Land',
  author : 'Barack Obama ',
  bookImageUrl : 'https://m.media-amazon.com/images/I/91uwocAMtSL._AC_UY436_FMwebp_QL65_.jpg'
}
const secondBook = {
  title : 'If Animals Kissed Good Night',
  author : ' Ann Whitford Paul, David WalkerAnn Whitford Paul, David Walker',
  bookImageUrl : 'https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._AC_SX368_.jpg'

}
const thirdBook = {
  title : 'A Time for Mercy (Jake Brigance)',
  author : 'John Grisham',
  bookImageUrl : 'https://m.media-amazon.com/images/I/A1i8NcG05pL._AC_UY436_FMwebp_QL65_.jpg'

}



function BookList() {
  return (
    <section className='booklist' >
      <Book bookImageUrl={firstBook.bookImageUrl} title={firstBook.title} author={firstBook.author}/> 
      <Book bookImageUrl={secondBook.bookImageUrl} title={secondBook.title} author={secondBook.author} />
      <Book bookImageUrl={thirdBook.bookImageUrl} title={thirdBook.title} author={thirdBook.author} /> 
    </section> 
  );
}
//const Book = ({ bookImageUrl,title,  author }) => {
const Book = (book) => {
  const { bookImageUrl,title,author}=book
  return (
    <article className='book'>
      <img src={ bookImageUrl} alt=""/>
      <h1>{author}</h1>
      <h4>{title}</h4>
    </article>
  
  // with book object name explicitly
  // <article className='book'>
    //   <img src={ book.bookImageUrl} alt=""/>
    //   <h1>{book.title}</h1>
    //   <h4>{book.author}</h4>
    // </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));