import React, {PropTypes} from 'react';
import TableRowEmployee from './TableRowEmp';

class TableEmployee extends React.Component {

  render() {
    return (
      <div className="table-employee">
        <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Role</th>
            <th scope="col">Department</th>
            <th scope="col">Birthday</th>
            <th scope="col">Join Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.employees.map( employee =>
            <TableRowEmployee key={employee.id} employee={employee} />
          )}
        </tbody>
      </table>
      </div>
    );
  }
}

TableEmployee.propTypes = {
  employees: PropTypes.array.isRequired
};

export default TableEmployee;
