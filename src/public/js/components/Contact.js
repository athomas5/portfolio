import React from 'react';
import PropTypes from 'prop-types';
import arrowLeft from '../../assets/svg/arrow-left.svg';

const Contact = ({ onClick }) => {
  return (
    <section className="contact-component">
      <div className="contact-container">
        <div className="header">Get In Touch</div>
        <p className="contact-text">
          If you would like to connect with me, email <a href="mailto:athomas@software@gmail.com" className="contact-link">athomas.software@gmail.com</a> or add me on <a href="https://www.linkedin.com/in/andrethomas5/" className="contact-link">LinkedIn</a>.
        </p>
      </div>
      <img onClick={onClick} className="arrow-left" src={arrowLeft} alt="Back button"/>
    </section>
  );
};

Contact.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Contact;
