import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = (props) => {
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
            <Link to="/" className="navbar-brand logo">
              <FontAwesomeIcon icon={faUtensils} />
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
