import React from 'react';
import styles from './Home.module.scss'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.introBlock}>
        <div className={styles.topLine} />
        <span className={styles.displayText}>I'm Ryan, full-stack developer & runner</span>
        <span>
          Coding since 2010. Working with C# on .Net, Typescript on React, Kotlin on Android, buiding front-end with Html & CSS/SCSS,
          and having exerience with Java.<br />
          Running since 2005. Getting slower over time, but will keep running.
        </span>
      </div>
      <div>Right</div>
    </div>
  )
}

export default Home;