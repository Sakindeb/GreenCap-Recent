import React, { useState } from 'react';
import styles from '../styles/Navigation.module.css';
import { Link } from 'react-router-dom'
const Navigation = () => {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.navigation}>
      <nav>
        <ul>
          <span><li><Link to="/dashboard">Dashboard</Link></li></span>
          <span><li><Link to="/projects">Projects</Link></li></span>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/transactions">History</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      </div>
  );
};

export default Navigation;

