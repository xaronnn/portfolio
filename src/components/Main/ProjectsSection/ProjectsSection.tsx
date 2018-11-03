import * as React from 'react';
import Container from "../../layout/Container/Container";
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";
import Waypoint from "react-waypoint";

const classnames = require('./ProjectsSection.scss');

interface IProps {}

class ProjectsSection extends React.Component<IProps> {
  public render() {
    return (
      <Subscribe to={[NavigationContainer]}>
        {(navigation: NavigationContainer) => (
          <Waypoint onEnter={() => navigation.setRouteName(RouteName.Projects)} fireOnRapidScroll>
            <section className={classnames.root} id={RouteName.Projects}>
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
          </Waypoint>
        )}
      </Subscribe>
    );
  }
};

export default ProjectsSection;
