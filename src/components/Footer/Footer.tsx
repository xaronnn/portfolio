import * as React from 'react';
const classnames = require('./Footer.scss');

interface IProps {}

class Footer extends React.Component<IProps> {
  public render() {
    return (
      <footer className={classnames.root}>
        <div className={classnames.content}>
          <p>Im a footer</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
