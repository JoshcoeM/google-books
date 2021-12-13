import { render, screen, within, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from './Home';

describe('Home',() => {
  let component;
  beforeEach( () => {
    component = render(<Home />);
  });

  test('renders the favorite book header', () => {
    const linkElement = screen.getByText(/favorite book/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders the favorite book', () => {
    const favoriteBookElement = screen.getByTestId('favoriteBook');
    expect(favoriteBookElement).toBeInTheDocument();

    expect(within(favoriteBookElement).getByText(/a title/)).toBeInTheDocument();
    expect(within(favoriteBookElement).getByText(/an author/)).toBeInTheDocument();
    expect(within(favoriteBookElement).getByText(/a description/)).toBeInTheDocument();
    expect(within(favoriteBookElement).getByText(/a type/)).toBeInTheDocument();
  });

  test('making the first book to read favorite updates the favorite', () => {
    const firstBookToRead = screen.getByTestId('toRead0');
    act(() => {
      fireEvent.click(within(firstBookToRead).getByText('Favorite'));
    });
    const favoriteBookElement = screen.getByTestId('favoriteBook');
    expect(within(favoriteBookElement).getByText(/a title 1/i)).toBeInTheDocument();
  });

  test('renders the books to read title', () => {
    const element = screen.getByText(/books to read/i);
    expect(element).toBeInTheDocument();
  });

  test('the book to read section has 3 books', () => {
    const booksToReadElement = screen.getByTestId('booksToRead');
    const books = within(booksToReadElement).getAllByText(/Title[:]/);
    expect(books.length).toBe(3);
  });

});



