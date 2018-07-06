import React, {PropTypes} from 'react';
import TableEmployee from '../components/TableEmp';

class SearchEmployee extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        name: "",
        lastname: "",
        employees: [],
        error: '',
        loading: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.displayTable = this.displayTable.bind(this);
      this.onChange = this.onChange.bind(this);
    }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const { name, lastname } = this.state;

    let myHeaders = new Headers({
      "Content-Type": "application/json;charset=UTF-8 "
    });

    let myInit = { method: 'GET',
                  headers: myHeaders,
                  protocol:'http:',
                  mode: 'cors'};
    fetch(`http://10.71.112.132:8080/EmployeeDemo/Employees?name=${name}&lastname=${lastname}`, myInit)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('something went wrong!');
          }
      })
      .then((employees) => {
        this.setState({ employees: employees, error: false, loading: false  });
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      });
  }

  displayTable() {
    if (this.state.error === true) {
      return (<h3>Error on Server, please try again later</h3>);
    } else if(typeof this.state.employees !== 'undefined' && this.state.employees.length > 0) {
        return (<TableEmployee employees={this.state.employees} />);
    } else if (this.state.employees.length === 0 && this.state.error === false) {
        return (<h3>No records found</h3>);
    } else if (this.state.loading === true) {
        return (<h3>Loading records...</h3>);
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Search Employee by Name</h1>
        <form className="form-inline" name="myForm" onSubmit={this.handleSubmit}>
          <div className="form-group mx-sm-3 mb-2">
            <label className="col-form-label">First Name: </label>
            <input type="text" name="name" className="form-control" onChange={this.onChange}/>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label className="col-form-label">Last Name: </label>
            <input type="text" name="lastname" className="form-control" onChange={this.onChange}/>
          </div>
          <button type="submit" value="Submit" className="btn btn-primary mb-2">Search</button>
        </form>
        {this.displayTable()}
      </div>
    );
  }
}

export default SearchEmployee;
