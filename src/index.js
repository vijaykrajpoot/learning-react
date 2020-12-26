import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
const books = [
  {
    id: 1,
    title: 'A Promised Land',
    author: 'Barack Obama ',
    bookImageUrl:
      'https://m.media-amazon.com/images/I/91uwocAMtSL._AC_UY436_FMwebp_QL65_.jpg',
  },
  {
    id: 2,
    title: 'If Animals Kissed Good Night',
    author: ' Ann Whitford Paul, David WalkerAnn Whitford Paul, David Walker',
    bookImageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._AC_SX368_.jpg',
  },
  {
    id: 6,
    title: 'A Time for Mercy (Jake Brigance)',
    author: 'John Grisham',
    bookImageUrl:
      'https://m.media-amazon.com/images/I/A1i8NcG05pL._AC_UY436_FMwebp_QL65_.jpg',
  },
  {
    id: 3,
    title: 'A Promised Land',
    author: 'Barack Obama ',
    bookImageUrl:
      'https://m.media-amazon.com/images/I/91uwocAMtSL._AC_UY436_FMwebp_QL65_.jpg',
  },
  {
    id: 4,
    title: 'If Animals Kissed Good Night',
    author: ' Ann Whitford Paul, David WalkerAnn Whitford Paul, David Walker',
    bookImageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._AC_SX368_.jpg',
  },
  {
    id: 5,
    title: 'A Time for Mercy (Jake Brigance)',
    author: 'John Grisham',
    bookImageUrl:
      'https://m.media-amazon.com/images/I/A1i8NcG05pL._AC_UY436_FMwebp_QL65_.jpg',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Abook key={book.id} book={book}>
            {' '}
          </Abook>
        )
      })}
    </section>
  )
}
//const Book = ({ bookImageUrl,title,  author }) => {
const Abook = (props) => {
  const clickHandler = (e) => {
    alert('Clicked')
    console.log(e)
    console.log(e.target)
  }
  const onMouseOverHandler = (author) => {
    console.log(author)
  }
  const { bookImageUrl, title, author } = props.book
  return (
    <article
      className='book'
      onMouseOver={() => {
        onMouseOverHandler(title)
      }}
    >
      <img src={bookImageUrl} alt='' />
      <h1 onMouseOver={() => console.log(author)}>{author}</h1>
      <h4>{title}</h4>
      <button type='button' onClick={clickHandler}>
        ClickMe
      </button>
      <button type='button'></button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
