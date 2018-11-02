import React from 'react';
import NavBar from "./NavBar/NavBar";
const classnames = require('./App.scss');

class App extends React.Component {
  public render() {
    return (
      <div className={classnames.root}>
        <NavBar />

      </div>
    );
  }
}

export default App;
