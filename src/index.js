import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

function BookList() {
  return (
    <section className='booklist' >
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section> 
  );
}
   

const Book = ()=>{
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Title = () => {
  return <h1>I Love You to the Moon and Back</h1>;
}
const Author = () => {
  return <h4>Vijay Kumar Rajput</h4>
}
const Image = () => (
   <img src='https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL640_FMwebp_QL65_.jpg' alt=""/>
)
ReactDom.render(<BookList/>,document.getElementById('root'));