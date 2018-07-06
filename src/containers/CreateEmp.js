import React, {PropTypes} from 'react';
import CreateForm from '../components/CreateForm';
import {connect} from 'react-redux';
import {CreateEmployeeAction} from '../redux/actions/createAction';

class CreateEmployee extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        employee: {
          name: "",
          lastName: "",
          role: "",
          departmentId: "2",
          birthday: "",
          joinDate: ""
        }
      };
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.displayMessage = this.displayMessage.bind(this);
    }

  onChange(e){
    let employee = Object.assign({}, this.state.employee);
    const field = e.target.name;
    employee[field] = e.target.value;
    this.setState({ employee: employee });
  }

  handleSubmit(e){
    e.preventDefault();
    const { name, lastName, role, departmentId, birthday, joinDate } = this.state.employee;
    const data = {name, lastName, role, department: {id: departmentId}, birthday, joinDate };
    console.log(data);
    this.props.dispatch(CreateEmployeeAction(data));
  }

  displayMessage() {
    console.log(this.props.loading);
    console.log(this.props.error);
    console.log(this.props.response);
    if (this.props.error === true) {
      return (<h3>Something went wrong, please try again</h3>);
    } else if (this.props.loading === true) {
      return (<h3>Adding Employee...</h3>);
    } else if (this.props.response !== "") {
      return (<h3>Employee added successfully</h3>);
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <h1>Add a new Employee</h1>
        <CreateForm
          employee={this.state.employee}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
          />
        {this.displayMessage()}
      </div>
    );
  }
}

CreateEmployee.propTypes = {
  dispatch: PropTypes.func,
  response: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    response: state.createEmployee.response,
    loading: state.createEmployee.loading,
    error: state.createEmployee.error
  };
}

export default connect(mapStateToProps)(CreateEmployee);
