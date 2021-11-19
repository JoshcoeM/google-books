import { render, screen, within, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Book from './Book.js';

describe('Book', () => {
    let component;
    const bookItem =
    { 
        title: 'a title',
        author: 'an author',
        description: 'a description',
        thumbnail: 'https://pixy.org/src/10/thumbs350/107188.jpg',
        type: 'a type'
    }
    beforeEach(() => { component = render(<Book {...bookItem }/>)});

    describe('title', () => {
        test('renders the label', () => {
            const element = screen.getByText(/title:/i);
            expect(element).toBeInTheDocument();
          });
        test('renders the value',() => {
            const element = screen.getByText(/a title/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('author', () => {
        test('renders the label', () => {
            const element = screen.getByText(/author:/i);
            expect(element).toBeInTheDocument();
          });
        test('renders the value',() => {
            const element = screen.getByText(/an author/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('description', () => {
        test('renders the label', () => {
            const element = screen.getByText(/description:/i);
            expect(element).toBeInTheDocument();
          });
        test('renders the value',() => {
            const element = screen.getByText(/a description/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('type', () => {
        test('renders the label', () => {
            const element = screen.getByText(/type:/i);
            expect(element).toBeInTheDocument();
          });
        test('renders the value',() => {
            const element = screen.getByText(/a type/i);
            expect(element).toBeInTheDocument();
        });
    });
    test('renders the image',() => {
        const element = screen.getByTestId(/thumbnail/i);
        expect(element.getAttribute('src')).toBe('https://pixy.org/src/10/thumbs350/107188.jpg')
    });

    describe('favoriteBook', () => {
        beforeEach(() => { component = render(<Book testid = 'favoriteBook' {...bookItem } isFavorite={true}/>)});

        test('favorite button does not appear', () => {
            const favoriteBook = screen.getByTestId('favoriteBook');
            const favoriteButton = within(favoriteBook).queryByText(/Favorite/);
            expect(favoriteButton).not.toBeInTheDocument(); 
        });
    });

    describe('when book is not favorite', () => {
        let favoriteSpy;
        beforeEach(() => { 
            favoriteSpy = jest.fn();
            component = render(<Book testid = 'nonFavoriteBook' {...bookItem } isFavorite={false} favorite={favoriteSpy}/>)
        });

        test('favorite button appears', () => {
            const nonFavoriteBook = screen.getByTestId('nonFavoriteBook');
            const favoriteButton = within(nonFavoriteBook).queryByText(/Favorite/);
            expect(favoriteButton).toBeInTheDocument(); 
        });

        test('clicking the favorite button calls the props.favorite function', () => {
            const nonFavoriteBook = screen.getByTestId('nonFavoriteBook');
            const favoriteButton = within(nonFavoriteBook).queryByText(/Favorite/); 
            act(() => {
                fireEvent.click(favoriteButton);
            })
            expect(favoriteSpy).toHaveBeenCalled();
        });
    });

})

