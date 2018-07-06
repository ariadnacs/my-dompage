import React, {PropTypes} from 'react';

const TableRowEmployee = ({employee}) => {

  return (
    <tr>
      <td scope="row">{employee.name}</td>
      <td>{employee.lastName}</td>
      <td>{employee.role}</td>
      <td>{employee.department.departmentName}</td>
      <td>{employee.birthday}</td>
      <td>{employee.joinDate}</td>
    </tr>
  );
};

TableRowEmployee.propTypes = {
  employee: PropTypes.object.isRequired
};

export default TableRowEmployee;
