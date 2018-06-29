import React, {PropTypes} from 'react';

class CreateEmployee extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: "",
        lastName: "",
        role: "",
        departmentId: "",
        birthday: "",
        joinDate: "",
        error: '',
        loading: false
      };
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.displayMessage = this.displayMessage.bind(this);
    }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ loading: true });
    const { name, lastName, role, departmentId, birthday, joinDate } = this.state;
    const data = {name, lastName, role, department: {id: departmentId}, birthday, joinDate };

    let myHeaders = new Headers({
      "Content-Type": "application/json;charset=UTF-8 "
    });

    let myInit = { method: 'POST',
                  headers: myHeaders,
                  protocol:'http:',
                  mode: 'cors',
                  body: JSON.stringify(data)};
    fetch("http://10.71.112.132:8080/EmployeeDemo/Employee", myInit)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('something went wrong!');
          }
      })
      .then((response) => {
        this.setState({ error: false, loading: false  });
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      });
  }

  displayMessage() {
    if (this.state.loading === true) {
      return (<h3>Adding Employee...</h3>);
    } else if (this.state.error === true) {
      return (<h3>Something went wrong, please try again</h3>);
    } else if (this.state.error === false) {
      return (<h3>Employee added successfully</h3>);
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <h1>Add a new Employee</h1>
        <form id="myForm"  onSubmit={this.handleSubmit}>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="fname" className="col-form-label">First Name: </label>
            <input type="text" name="name" id="fname" className="form-control" onChange={this.onChange} />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="flastname" className="col-form-label">Last Name: </label>
            <input type="text" name="lastName" id="flastname" className="form-control" onChange={this.onChange} />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="frole" className="col-form-label">Role: </label>
            <input type="text" name="role" id="frole" className="form-control" onChange={this.onChange} />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label className="col-form-label">Department Name: </label>
              <select name="departmentId" className="form-control" onChange={this.onChange} >
                <option value="2">GSS Legacy</option>
                <option value="3">Payroll</option>
                <option value="4">HRZ</option>
                <option value="10">Cleaning</option>
                <option value="12">Facilities</option>
              </select>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="fbirthday" className="col-form-label">Birthday Date: </label>
            <input type="date" name="birthday" id="fbirthday" className="form-control" onChange={this.onChange} />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="fjoinDate" className="col-form-label">Join Date: </label>
            <input type="date" name="joinDate" id="fjoinDate" className="form-control" onChange={this.onChange} />
          </div>
          <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
        </form>
        {this.displayMessage()}
      </div>
    );
  }
}

export default CreateEmployee;
