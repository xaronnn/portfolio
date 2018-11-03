import * as React from 'react';
import Container from "../../layout/Container/Container";
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";
import Waypoint from "react-waypoint";

const classnames = require('./ContactSection.scss');

interface IProps {
}

class ContactSection extends React.Component<IProps> {
  public render() {
    return (
      <Subscribe to={[NavigationContainer]}>
        {(navigation: NavigationContainer) => (
          <Waypoint fireOnRapidScroll onEnter={() => navigation.setRouteName(RouteName.Contact)}>
            <section className={classnames.root} id={RouteName.Contact}>
              <Container>
                <div className={classnames.container}>
                  <h1 className={classnames.title}>Contact</h1>
                </div>
              </Container>
            </section>
          </Waypoint>
        )}
      </Subscribe>
    );
  }
};

export default ContactSection;
