import React from 'react';
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import {Provider} from "unstated";
const classnames = require('./App.scss');

class App extends React.Component {
  public render() {
    return (
      <div className={classnames.root}>
        <Provider>
          <NavBar />
          <Main />
          <Footer />
        </Provider>
      </div>
    );
  }
}

export default App;
