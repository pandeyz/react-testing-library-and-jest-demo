import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import EmpMgmt from '../../components/EmpMgmt';

afterEach(() => {
    cleanup();
});
  
test('EmpMgmt form should me blank and list should be empty', () => {
    render(<EmpMgmt />);

    const fullnameInput = screen.getByTestId('fullname');
    const mobileInput = screen.getByTestId('mobile');

    expect(fullnameInput).toBeInTheDocument();
    expect(mobileInput).toBeInTheDocument();

    expect(fullnameInput).toHaveValue('');
    expect(mobileInput).toHaveValue('');

    const tableRowNoDataFound = screen.getByTestId('no-data-found');
    expect(tableRowNoDataFound).toBeInTheDocument();
});

test('One record entry on EmpMgmt form & it should be shown on listing', () => {
    const fullnameTxt = 'Aman';  const mobileTxt = '9876543210';

    render(<EmpMgmt />);

    const tableRowNoDataFound = screen.getByTestId('no-data-found');
    expect(tableRowNoDataFound).toBeInTheDocument();

    const fullnameInput = screen.getByTestId('fullname');
    const mobileInput = screen.getByTestId('mobile');
    
    fireEvent.change(fullnameInput, { target: { value: 'Aman' } });
    expect(fullnameInput).toHaveValue('Aman');

    fireEvent.change(mobileInput, { target: { value: '9876543210' } });
    expect(mobileInput).toHaveValue('9876543210');

    const btnSubmit = screen.getByTestId('btn-submit');
    fireEvent.click(btnSubmit);

    const tableRowDataFound = screen.getByTestId('data-found-1');
    expect(tableRowDataFound).toBeInTheDocument();
});

test('Delete one record and list will be empty', () => {
    const fullnameTxt = 'Aman';  const mobileTxt = '9876543210';

    render(<EmpMgmt />);

    const fullnameInput = screen.getByTestId('fullname');
    const mobileInput = screen.getByTestId('mobile');
    
    fireEvent.change(fullnameInput, { target: { value: 'Aman' } });
    expect(fullnameInput).toHaveValue('Aman');

    fireEvent.change(mobileInput, { target: { value: '9876543210' } });
    expect(mobileInput).toHaveValue('9876543210');

    const btnSubmit = screen.getByTestId('btn-submit');
    fireEvent.click(btnSubmit);

    const tableRowDataFound = screen.getByTestId('data-found-1');
    expect(tableRowDataFound).toBeInTheDocument();

    const btnDelete = screen.getByTestId('btn-delete-1');
    fireEvent.click(btnDelete);

    const tableRowNoDataFound = screen.getByTestId('no-data-found');
    expect(tableRowNoDataFound).toBeInTheDocument();
});