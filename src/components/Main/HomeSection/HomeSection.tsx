import * as React from 'react';
const classnames = require('./HomeSection.scss');

interface IProps {}

class HomeSection extends React.Component<IProps> {
  public render() {
    return (
      <section className={classnames.root}>
        <div className={classnames.backgroundContainer} />
        <div className={classnames.content}>
          <img
            className={classnames.imgMe}
            src="/assets/img/me.jpg"
          />
          <h1 className={classnames.name}>Dennis Kievits</h1>
          <h4 className={classnames.position}>Software Engineer & Entrepeneur</h4>
        </div>
      </section>
    );
  }
};

export default HomeSection;
