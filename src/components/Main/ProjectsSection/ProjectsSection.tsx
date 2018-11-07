import * as React from 'react';
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";
import Waypoint from "react-waypoint";

const aspSysteemImg = require('./asp-systeem/1.jpg');

const classnames = require('./ProjectsSection.scss');

interface IProps {
}

class ProjectsSection extends React.Component<IProps> {
  public render() {
    return (
      <Subscribe to={[NavigationContainer]}>
        {(navigation: NavigationContainer) => (
          <Waypoint onEnter={() => navigation.setRouteName(RouteName.Projects)} fireOnRapidScroll>
            <section className={classnames.root} id={RouteName.Projects}>
              <div className={classnames.container}>
                <div>
                  <h1 className={classnames.title}>Projects</h1>
                </div>
                <div className={classnames.grid}>
                  <div
                    className={classnames.gridItem}
                    style={{
                      background: `url(${aspSysteemImg}) center no-repeat`,
                      backgroundSize: 'cover'
                    }}
                  >
                    <div className={classnames.gridItemDarken} />
                    <div className={classnames.gridItemContainer}>
                      <h2>ASP System</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Waypoint>
        )}
      </Subscribe>
    );
  }
};

export default ProjectsSection;
