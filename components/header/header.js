// @flow
import React from 'react';
import styles from './header.css';

const Header = (props: {children: React.ReactNode}) => (
  <div className={styles.header}>
    <div className={styles.name}>
      Netflixrolette
    </div>
    {props.children}
  </div>);

export default Header;
