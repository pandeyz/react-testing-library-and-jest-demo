import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../../components/todo';

afterEach(() => {
    cleanup();
});

test('Todo 1', () => {
    const todo = { id: 1, title: 'Wake up early', completed: true };

    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId(`todo-${todo.id}`);
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent(todo.title);
    expect(todoElement).toContainHTML('strike');
});

test('Todo 2', () => {
    const todo = { id: 2, title: 'Do excercise', completed: false };

    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId(`todo-${todo.id}`);
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent(todo.title);
    expect(todoElement).not.toContainHTML('strike');
});

test('Snapshot Test', () => {
    const todo = { id: 1, title: 'Wake up early', completed: true };
    
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    expect(tree).toMatchSnapshot();
});