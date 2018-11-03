import * as React from 'react';
import Container from "../../layout/Container/Container";
const classnames = require('./SkillsSection.scss');

interface IProps {}

class SkillsSection extends React.Component<IProps> {
  public render() {
    return (
      <section className={classnames.root}>
        <Container>
          <div className={classnames.container}>
            <h1 className={classnames.title}>Skills</h1>
          </div>
        </Container>
      </section>
    );
  }
};

export default SkillsSection;
