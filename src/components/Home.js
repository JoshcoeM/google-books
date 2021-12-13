import Book from './Book.js';
import Search from './Search';
import { useState } from 'react';

function Home() {
    const booksToRead = [
        {
            title: 'a title 1',
            author: 'an author',
            description: 'a description',
            thumbnail: 'https://pixy.org/src/10/thumbs350/107188.jpg',
            type: 'a type',
            isFavorite: 'true'
        }, {
            title: 'a title 2',
            author: 'an author',
            description: 'a description',
            thumbnail: 'https://pixy.org/src/10/thumbs350/107188.jpg',
            type: 'a type',
            isFavorite: 'true'
        }, {
            title: 'a title 3',
            author: 'an author',
            description: 'a description',
            thumbnail: 'https://pixy.org/src/10/thumbs350/107188.jpg',
            type: 'a type',
            isFavorite: 'true'
        }]

    const [favoriteBook, setFavoriteBook] = useState({
        title: 'a title',
        author: 'an author',
        description: 'a description',
        thumbnail: 'https://pixy.org/src/10/thumbs350/107188.jpg',
        type: 'a type',
    });

    return (
        <div className="Home">
            <Search />
            <header className="Home-header">
                Favorite Book
            </header>
            <Book testid="favoriteBook" {...favoriteBook} isFavorite={true} ></Book>

            <header className='toRead-header'>
                Books to Read
            </header>
            <div data-testid='booksToRead'>
                {booksToRead.map((book, index) => <Book testid={"toRead" + index} key={index} {...book} isFavorite={false} favorite={setFavoriteBook}></Book>)}
            </div>
        </div>
    );
}

export default Home;