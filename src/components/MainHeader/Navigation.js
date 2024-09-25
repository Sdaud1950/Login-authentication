import React from 'react';

import classes from './Navigation.module.css';
import Mycontext from '../Store/AuthContext';
import { useContext } from 'react';

const Navigation = () => {

  const NewValue=useContext(Mycontext)
  return (
    <nav className={classes.nav}>
      <ul>
        {NewValue.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {NewValue.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {NewValue.isLoggedIn && (
          <li>
            <button onClick={NewValue.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
