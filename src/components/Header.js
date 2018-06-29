import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <div className="leftmenu">
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="/create" activeClassName="active">Create Employee</Link>
        <Link to="/show" activeClassName="active">Show Employees</Link>
        <Link to="/search" activeClassName="active">Search Employees</Link>
        <Link to="/birthday" activeClassName="active">Employees Birthday</Link>
      </nav>
    </div>
  );
};

export default Header;
