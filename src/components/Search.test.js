import {render, screen, fireEvent} from '@testing-library/react';
import Search from './Search';
import {Router} from 'react-router-dom';

const historyMock = {push: jest.fn(),location: {}, listen:jest.fn()};
describe('Search', () => {
    beforeEach(() => {
        component = render(<Router history={historyMock}>
            <Search />
        </Router>)
    }); 
    test('renders', () => {
        const element = screen.getByText(/Search/i);
        expect(element).toBeIntheDocument();
    });
    test('there is input for term', () => {
        const element = screen.getByText(/Term/i);
        expect(element).toBeInTheDocument();
    });
    test('there is a search button', () => {
        const element = screen.getByText(/search/i);
        expect(element).toBeInTheDocument();
    });
    test('clicking the search button navs the user with the term', () => {
        const input = screen.getAllByPlaceholderText(/term/i);
        fireEvent.change(input, {target: {value: 'banana'}});
        const searchbutton = screen.getByText(/search/i);
        fireEvent.click(searchbutton);
        expect(historyMock.push.mock.calls[0][0]).toEqual('/search?term=banana');
    });
});

