import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Home = ({ onClick }) => {
  return (
    <section className="home-component">
      <div className="main-content-wrapper">
        <div className="main-container">
          <h1 className="header">Andre Thomas</h1>
          <Navbar onClick={onClick} />
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Home;
