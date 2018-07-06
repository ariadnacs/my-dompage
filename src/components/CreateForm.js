import React, {PropTypes} from 'react';

const CreateForm = ({employee, handleSubmit, onChange }) => {
  return (
    <form id="myForm"  onSubmit={handleSubmit}>
      <div className="form-group mx-sm-3 mb-2">
        <label className="col-form-label">First Name: </label>
        <input type="text" name="name" className="form-control" value={employee.name} onChange={onChange} />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label className="col-form-label">Last Name: </label>
        <input type="text" name="lastName" id="flastname" className="form-control" value={employee.lastName} onChange={onChange} />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label className="col-form-label">Role: </label>
        <input type="text" name="role" className="form-control" value={employee.role} onChange={onChange} />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label className="col-form-label">Department Name: </label>
          <select name="departmentId" className="form-control" value={employee.departmentId} onChange={onChange} >
            <option value="2">GSS Legacy</option>
            <option value="3">Payroll</option>
            <option value="4">HRZ</option>
            <option value="10">Cleaning</option>
            <option value="12">Facilities</option>
          </select>
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label className="col-form-label">Birthday Date: </label>
        <input type="date" name="birthday" className="form-control" value={employee.birthday} onChange={onChange} />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label className="col-form-label">Join Date: </label>
        <input type="date" name="joinDate" className="form-control" value={employee.joinDate} onChange={onChange} />
      </div>
      <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

CreateForm.propTypes = {
  employee: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CreateForm;
