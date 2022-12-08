import { useState } from "react";

function EmpMgmt() {

  const initUser = {fullname: '', mobile: ''};
  const [employee, setEmployee] = useState(initUser);
  const [employees, setEmployees] = useState([]);

  const handleChange = (event) => {
    let emp = {...employee};
    emp[event.target.name] = event.target.value;
    setEmployee(emp);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let emps = [...employees];
    emps.push(employee);
    setEmployees(emps);

    setEmployee(initUser);
  }

  const handleDelete = (index) => {
    let emps = [...employees];
    emps.splice(index, 1);
    setEmployees(emps);
  } 

  return (
    <>
      <div style={{ width: '60%', margin: '0 auto', marginTop: 20 }}>
        <form className="form-inline" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="fullname">Fullname:</label>
            <input name="fullname" value={employee.fullname} data-testid="fullname" className="form-control" onChange={(event) => handleChange(event)} />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input name="mobile" value={employee.mobile} data-testid="mobile" className="form-control" onChange={(event) => handleChange(event)} />
          </div>
          <button type="submit" className="btn btn-primary" data-testid="btn-submit">Submit</button>
        </form>
        <hr />
        <h4 style={{ textAlign: 'center' }}>Emp Listing</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.length > 0
              ?
              employees.map((employee, index) => 
                <tr key={index} data-testid={`data-found-${index+1}`}>
                  <td>{employee.fullname}</td>
                  <td>{employee.mobile}</td>
                  <td><button type="button" data-testid={`btn-delete-${index+1}`} onClick={() => handleDelete(index)} className="btn btn-sm btn-danger">Delete</button></td>
                </tr>      
              )
              :
              <tr data-testid="no-data-found" style={{ textAlign: 'center' }}><td colSpan={3}>No employee found</td></tr>
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EmpMgmt;