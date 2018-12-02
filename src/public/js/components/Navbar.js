import React from 'react';
import PropTypes from 'prop-types';
import NavbarLink from './NavbarLink';

const Navbar = ({ onClick }) => {
  return (
    <div className="navbar-component">
      <NavbarLink id="about-link" text="About" onClick={onClick} />
      <NavbarLink id="work-link" text="Work" onClick={onClick} />
      <NavbarLink id="contact-link" text="Contact" onClick={onClick} />
    </div>
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Navbar;