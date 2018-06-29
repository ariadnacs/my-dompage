import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

class TableEmployee extends React.Component {

  rows() {
    let rows = [];
    this.props.employees.forEach(function(employee) {
      rows.push(
        <tr>
          <td scope="row">{employee.name}</td>
          <td>{employee.lastName}</td>
          <td>{employee.role}</td>
          <td>{employee.department.departmentName}</td>
          <td>{employee.birthday}</td>
          <td>{employee.joinDate}</td>
        </tr>
      );
    });
    return rows;
  }
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
          {this.rows()}
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
