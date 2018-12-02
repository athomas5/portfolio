import React from 'react';
import PropTypes from 'prop-types';

const NavbarLink = ({ text, id, onClick }) => {
  return (
    <div id={id} className="navbar-link-component" onClick={e => onClick(e)}>
      {text}
    </div>
  );
};

NavbarLink.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NavbarLink;