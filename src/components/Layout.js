import React from 'react'
import styles from './layout.module.css';

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <h1 className={styles.title}>MCGA 2022</h1>
        </header>
        {children}
        <footer>
            <p>Property of Horacio Lerda</p>
        </footer>
    </div>
  )
}

export default Layout