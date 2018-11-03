import * as React from 'react';
import Container from "../../layout/Container/Container";
const classnames = require('./ProjectsSection.scss');

interface IProps {}

class ProjectsSection extends React.Component<IProps> {
  public render() {
    return (
      <section className={classnames.root}>
        <Container>
          <div className={classnames.container}>
            <h1 className={classnames.title}>Projects</h1>
          </div>
        </Container>
      </section>
    );
  }
};

export default ProjectsSection;
