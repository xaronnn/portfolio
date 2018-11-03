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
            <div className={classnames.title}>
              <h1 className={classnames.title}>Projects</h1>
            </div>
            <div className={classnames.grid}>
              <div className={classnames.gridItem}></div>
              <div className={classnames.gridItem}></div>
              <div className={classnames.gridItem}></div>
              <div className={classnames.gridItem}></div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
};

export default ProjectsSection;
