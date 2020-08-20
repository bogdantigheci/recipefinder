import React from 'react';
import { Link } from 'react-router-dom';

const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/"  className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
