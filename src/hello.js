import React, { Component } from 'react';
//import logo from './logo.svg';
import styles from './hello.css';

class Hello extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className="hoge">
          <h2 className={styles.app}>Welcome to React!!!</h2>
        </div>
        <p>
          To get started, edit <code>src/Hello.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Hello;
