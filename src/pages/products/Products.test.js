import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter as Router } from 'react-router-dom';
import UserEvent from '@testing-library/user-event';
import Products from './Products';

const mockData = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
];

describe('Products page - Test functionality', () => {
  it('fetches the product by mocking', () => {
    global.fetch = () =>
      Promise.resolve({ json: () => Promise.resolve(mockData) });
  });
  it('renders the page component', async () => {
    await act(() =>
      render(
        <Router>
          <Products />
        </Router>
      )
    );
    const button = screen.getByRole('button', {
      name: /Add to cart/i,
    });
    // UserEvent.click(button);
  });
});
