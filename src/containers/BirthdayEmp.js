import React, {PropTypes} from 'react';
import TableEmployee from '../components/TableEmp';

class BirthdayEmp extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        employees: [],
        error: ''
      };
      this.displayTable = this.displayTable.bind(this);
    }

  componentWillMount() {
    let myHeaders = new Headers({
      "Content-Type": "application/json;charset=UTF-8 "
    });

    let myInit = { method: 'GET',
                  headers: myHeaders,
                  protocol:'http:',
                  mode: 'cors'};
    let month = new Date().getMonth() + 1;
    fetch(`http://10.71.112.132:8080/EmployeeDemo/Employees/Birthday/${month}`, myInit)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('something went wrong!');
          }
      })
      .then((employees) => {
        this.setState({ employees: employees, error: false })
      })
      .catch((error) => {
        this.setState({ error: true })
      });
  }

  displayTable() {
    if (this.state.error === true) {
      return (<h3>Error on Server, please try again later</h3>);
    } else if(typeof this.state.employees !== 'undefined' && this.state.employees.length > 0) {
        return (<TableEmployee employees={this.state.employees} />);
    } else if (this.state.employees.length === 0 && this.state.error === false) {
        return (<h3>No records found</h3>);
    } else if (this.state.error === '') {
        return (<h3>Loading records...</h3>);
    }
  }

  render() {
    return (
    <div>
    <h1>Birthdays of this Month</h1>
    {this.displayTable()}
    </div>
    );
  }

}

export default BirthdayEmp;
