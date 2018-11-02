import React from 'react';
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
const classnames = require('./App.scss');

class App extends React.Component {
  public render() {
    return (
      <div className={classnames.root}>
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
