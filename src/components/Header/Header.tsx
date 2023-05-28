import React from 'react';
import styles from './Header.module.scss'

type Props = {}

const Header = (props: Props) => {
  console.log("item class ----->" + styles.menuItem)
  return (
    <div className={styles.container}>
      <a href='/home'>Ryan</a>
      <div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Blog</li>
          <li className={styles.menuItem}>Portfolio</li>
          <li className={styles.menuItem}>Pages</li>
          <li className={styles.menuItem}>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;