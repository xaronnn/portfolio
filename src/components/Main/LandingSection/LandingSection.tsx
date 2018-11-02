import * as React from 'react';
const classnames = require('./LandingSection.scss');

interface IProps {}

class LandingSection extends React.Component<IProps> {
  public render() {
    return (
      <section className={classnames.root}>
        <h2>Dennis Kievits</h2>
      </section>
    );
  }
};

export default LandingSection;
