import React from 'react';
import  ReactDOM from 'react-dom/client';

import './index.css';

const books = [
    {
        author: 'Jordan Moore',
        title: 'Interesting Facts For Curious Minds',
        img: 'images/Curious-mind.jpg',
        id: 1,
    },
    {
        author: 'Collen Hoover',
        title: 'Too Late',
        img: 'images/Too-late.PNG',
        id: 2,
    },
] 

const BookList = () => {
    const getBook = (id) => {
        const book = books.find((book)=> book.id === id )
        console.log(book)
    };
    getBook(2);
    return (
    <section className='booklist'>
        
        {books.map((book)=>{
        return <Book {...book} key={book.id} getBook={getBook} />;
    })}
    </section>
    );
};


const Book = (props) => {
    const { img, title, author, getBook, id} = props;
    // console.log(props);
return ( 
    <article className='book'>  
     <img src={img} alt={title} />
        <h2>{title}</h2>
        <button onClick={getBook(id)}>Click me </button>
         <h4>{author}</h4>
    </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById
('root'));

root.render(<BookList />);