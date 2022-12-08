import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Counter from '../../components/counter';

afterEach(() => {
  cleanup();
});

test('Counter initial value test', () => {
  const initCount = 0;
  render(<Counter initCount={initCount} />);
  const counterValueElem = screen.getByTestId('counter-value');
  const decrementBtn = screen.getByTestId('btn-dec');
  expect(counterValueElem).toBeInTheDocument();
  expect(counterValueElem).toHaveTextContent(0);

  // Works only when count value is 0
  if( initCount === 0 ) {
    expect(decrementBtn).toBeDisabled();
  }
});

test('Counter minus button is enabled when value is incremented', () => {
  const initCount = 0;
  render(<Counter initCount={initCount} />);
  const counterValueElem = screen.getByTestId('counter-value');
  const decrementBtn = screen.getByTestId('btn-dec');
  const incrementBtn = screen.getByTestId('btn-inc');
  
  fireEvent.click(incrementBtn);

  expect(counterValueElem).toBeInTheDocument();
  expect(counterValueElem).toHaveTextContent(1);
  expect(decrementBtn).toBeEnabled();
});

test('Counter minus button is again disabled when value is decremented to 0', () => {
  const initCount = 1;
  render(<Counter initCount={initCount} />);
  const counterValueElem = screen.getByTestId('counter-value');
  const decrementBtn = screen.getByTestId('btn-dec');
  
  fireEvent.click(decrementBtn);

  expect(counterValueElem).toBeInTheDocument();
  expect(counterValueElem).toHaveTextContent(0);
  expect(decrementBtn).toBeDisabled();
});

test('Snapshot Test', () => {
  const initCount = 0;
  const tree = renderer.create(<Counter initCount={initCount} />).toJSON();
  expect(tree).toMatchSnapshot();
});