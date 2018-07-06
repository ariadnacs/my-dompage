import React, {PropTypes} from 'react';
import TableEmployee from '../components/TableEmp';
import {connect} from 'react-redux';
import {getEmployeeAction} from '../redux/actions/getAction';

class ShowEmployee extends React.Component {

  constructor(props) {
      super(props);
      this.displayTable = this.displayTable.bind(this);
    }

  componentWillMount() {
    this.props.dispatch(getEmployeeAction());
  }

  displayTable() {
    if (this.props.errorGet === false && this.props.loadingGet === true) {
      return (
        <h3>Loading records...</h3>
      );
    } else if (this.props.errorGet === true && this.props.loadingGet === false) {
        return (
          <div>
            <h3>Something went wrong, please try again later</h3>
          </div>
        );
    } else if(typeof this.props.employeesGet !== 'undefined' && this.props.employeesGet.length > 0) {
        return (
          <TableEmployee employees={this.props.employeesGet} />
        );
    } else if (this.props.employeesGet.length === 0) {
        return (
          <h3>No records found</h3>
        );
    }
  }


  render() {
    return (
      <div>
        <h1>Show all Employees</h1>
        {this.displayTable()}
      </div>
    );
  }
}

ShowEmployee.propTypes = {
  dispatch: PropTypes.func,
  employeesGet: PropTypes.array,
  loadingGet: PropTypes.bool,
  errorGet: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    employeesGet: state.getEmployees.employees,
    loadingGet: state.getEmployees.loading,
    errorGet: state.getEmployees.error
  };
}

export default connect(mapStateToProps)(ShowEmployee);
