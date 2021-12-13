import * as axios from 'axios';

export function search(term){
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + term).then((result) => {
        const items = result.data.items;
        let books = [];
        items.map((items) => {
            books.push({title: items.volumeInfo.title,
                author: items.volumeInfo.authors[0],
                description: items.volumeInfo.description,
                thumbnail: items.volumeInfo.imageLinks.smallThumbnail,
                type: items.volumeInfo.printType
            });
        });
        return books;
    });
}

