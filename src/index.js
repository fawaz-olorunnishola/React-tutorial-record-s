import React from 'react';
import  ReactDOM from 'react-dom/client';

const BookList = () => {
    return <section>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    </section>
}

const Book = () => {
    return <article>
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Image = () => 
    <img 
        src='Curious-mind.jpg' 
        alt='Interesting Facts For Curious Minds' 
/>
const Title = () => <h2>Interesting Facts For Curious Minds</h2>
const Author = () => {
       return <h4>Jordan Moore</h4>
}
const root = ReactDOM.createRoot(document.getElementById
('root'));

root.render(<BookList />);