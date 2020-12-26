import React from 'react'

const ABook = (props) => {
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

export default ABook
