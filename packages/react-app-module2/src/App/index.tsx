import React from 'react';
import { DefaultLayout } from 'shared/layouts';
import styles from './index.module.css';

function App() {
  return (
    <DefaultLayout>
      <div className={styles.conatiner}>
        <header className={styles.header}>
          <h1>APP</h1>
          <p>
            Edit <code>src/App/index.tsx</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-app-module2
          </a>
        </header>
      </div>
    </DefaultLayout>
  );
}

export default App;
