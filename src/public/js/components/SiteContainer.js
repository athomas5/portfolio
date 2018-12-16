import React, { Component } from 'react';
import Home from './Home';
import About from './About';
// import Work from './Work';
import Contact from './Contact';

class SiteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSection: 'home-active' };

    this.navbarLinkClick = this.navbarLinkClick.bind(this);
    this.backButtonClick = this.backButtonClick.bind(this);
  }

  navbarLinkClick(e) {
    if (e.target.id === 'about-link') { this.setState({ activeSection: 'about-active' }); }
    if (e.target.id === 'work-link') { this.setState({ activeSection: 'work-active' }); }
    if (e.target.id === 'contact-link') { this.setState({ activeSection: 'contact-active' }); }
  };

  backButtonClick() {
    this.setState({ activeSection: 'home-active' });
  }

  render() {
    return (
      <div className="site-container-component">
        <div className={`sc-belt ${this.state.activeSection}`}>
          <About onClick={this.backButtonClick} />
          <Home onClick={this.navbarLinkClick} />
          {/* <Work /> */}
          <Contact onClick={this.backButtonClick} />
        </div>
      </div>
    );
  }
};

export default SiteContainer;