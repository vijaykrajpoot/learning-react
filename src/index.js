import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { books } from './books'
import { ABook } from './ABook'
import { greeting } from './testing/testing'

function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <ABook key={book.id} book={book}>
            {' '}
          </ABook>
        )
      })}
    </section>
  )
}

//const Book = ({ bookImageUrl,title,  author }) => {

ReactDom.render(<BookList />, document.getElementById('root'))
