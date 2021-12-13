import { render, screen, within, fireEvent } from '@testing-library/react';
import { act, mockComponent } from 'react-dom/test-utils';
import SearchResults from './SearchResults.js';

const historyMock= {
    push: jest.fn(),
    location: {search: '?term=123'},
    listen: jest.fn()
};

describe('searchResult', () => {
    let component;

    beforeEach(() => {
        component = render(<Router history={historyMock}>
            <SearchResults />
        </Router>);
    });

    test('prints out search results', () => {
        const element = screen.getByText(/searching for[:] /i);
        expect(element).toBeInTheDocument();
    });

    test('prints out the term passed to it', () =>{
        const element = screen.getByText(/123/);
        expect(element).toBeInTheDocument()
    });
})