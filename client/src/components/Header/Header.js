import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="navbar wrap nav_section">
      <nav
        className="navbar navbar-b navbar-reduce navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container-fluid toolbar">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton
              sideDrawerOpen={props.show}
              click={props.drawerClickHandler}
            />
          </div>
          <div className="toolbar__logo">
            <Link
              onClick={scrollToTop}
              to="top"
              className="navbar-brand js-scroll logo"
            >
              Recipe <span className="logo_title"> Finder</span>
            </Link>
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
