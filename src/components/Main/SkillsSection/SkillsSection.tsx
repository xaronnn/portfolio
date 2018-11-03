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
            <div>
              <h1 className={classnames.title}>Skills</h1>
            </div>
            <div className={classnames.grid}>
              <div className={classnames.gridItem}>
                <p>I have good knowledge of paradigms and the best practices for scalable and maintainable applications.</p>
              </div>
              <div className={classnames.gridItem}>
                something
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
};

export default SkillsSection;
