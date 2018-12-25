import * as React from 'react';
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";
import Waypoint from "react-waypoint";
import Container from "../../layout/Container/Container";

const classnames = require('./PersonalitySection.scss');

interface IProps {
}

interface IState {
}

class PersonalitySection extends React.Component<IProps, IState> {
  public state = {};

  public render() {
    return (
      <Subscribe to={[NavigationContainer]}>
        {(navigation: NavigationContainer) => (
          <section className={classnames.root} id={RouteName.Personality}>
            <Container>
              <div className={classnames.container}>
                <Waypoint fireOnRapidScroll onEnter={this.handleEnterWaypoint(navigation)}>
                  <h2 className={classnames.title}>Personality</h2>
                </Waypoint>
                <div>
                  WIP
                </div>
              </div>
            </Container>
          </section>
        )}
      </Subscribe>
    );
  }

  private handleEnterWaypoint = (navigation: NavigationContainer) => () => {
    navigation.setRouteName(RouteName.Personality);
  };
}

export default PersonalitySection;
