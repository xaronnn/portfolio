import * as React from 'react';
const classnames = require('./Footer.scss');

interface IProps {}

class Footer extends React.Component<IProps> {
  public render() {
    return (
      <footer className={classnames.root}>
        <div className={classnames.content}>
          <p>
            Portfolio website was crafted from scratch, source can be found on&nbsp;
            <a href="https://github.com/elertan/portfolio">
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
