import React from 'react';
import PropTypes from 'prop-types';
import profile from '../../assets/images/profile.jpg';
import arrowRight from '../../assets/svg/arrow-right.svg';

const About = ({ onClick }) => {
  return (
    <section className="about-component">
      <div className="about-content">
        <div className="header-container">
          <h1 className="header">About</h1>
          <div className="underline"></div>
        </div>
        <div className="profile-text-wrapper">
          <div className="profile-container">
            <img className="profile" src={profile} alt="Profile Picture"/>
          </div>
          <div className="text-container">
            <p><strong>Software Engineer</strong> with a passion for developing responsive web applications while focusing on usability, clean code, and best practices.</p>
            <br/>
            <p>Experienced using modern workflows and tools including <strong>JavaScript, React, Angular, HTML, CSS, Gulp and others</strong>. Comfortable with Git workflow, agile development methodologies, and test-driven development.</p>
          </div>
        </div>
      </div>
      <img onClick={onClick} className="arrow-right" src={arrowRight} alt="Back button"/>
    </section>
  );
};

About.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default About;
