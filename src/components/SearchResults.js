
import {useLocation} from "react-router-dom";
import * as queryString from 'query-string';
import {useEffect, useState } from 'react';
import {search} from '../services/GoogleBookApi.js';
import Book from './Book.js';

function SearchResult() {
    const location = useLocation();
    let term = queryString.parse(location.search).term;
    const [results, setResults] = useState([]);
    useEffect(() => {
        search(term).then((books) => {
            setResults(books);
        });
    }, []);

    return (
        <div>Searching for: {term}
            <div data-testid="results">
                {results.map((book, index) => <Book testid= {"searchResult" + index} key={index} {...book} isFavorite={false}></Book>)}
            </div>
        </div>
    );
};

export default SearchResult;