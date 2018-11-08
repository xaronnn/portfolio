import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
const classnames = require('./Footer.scss');

interface IProps {}

class Footer extends React.Component<IProps> {
  public render() {
    return (
      <footer className={classnames.root}>
        <div className={classnames.content}>
          <p>
            Website crafted from scratch with&nbsp;&nbsp;
            <FontAwesomeIcon icon={faHeart} style={{
              color: 'red',
              fontSize: 21
            }} />
            &nbsp;. Fork me on&nbsp;
            <a href="https://github.com/elertan/portfolio">
              GitHub
            </a>
            !
          </p>
          <p className={classnames.small}>
            Copyright &copy; 2018 DennisKievits.com. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
