import * as React from 'react';
const classnames = require('./LandingSection.scss');

interface IProps {}

class LandingSection extends React.Component<IProps> {
  public render() {
    return (
      <section className={classnames.root}>
        <div className={classnames.backgroundContainer} />
        <div className={classnames.content}>
          <img
            className={classnames.imgMe}
            src="/assets/img/me.jpg"
          />
          <h2>Dennis Kievits</h2>
        </div>
      </section>
    );
  }
};

export default LandingSection;
