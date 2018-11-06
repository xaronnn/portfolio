import * as React from 'react';
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";
import Waypoint from "react-waypoint";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobile} from "@fortawesome/free-solid-svg-icons";
import {faEnvelopeOpen} from "@fortawesome/free-regular-svg-icons";
import {faDiscord, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import MapComponent from "./MapComponent";

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
              <div className={classnames.container}>
                <div>
                  <h1 className={classnames.title}>Contact</h1>
                </div>
                <div className={classnames.grid}>
                  <div className={classnames.tableContainer}>
                    <table>
                      <tbody>
                      <tr>
                        <td><FontAwesomeIcon icon={faMobile} size="2x"/></td>
                        <td>+31 6 34 26 91 15</td>
                      </tr>
                      <tr>
                        <td><FontAwesomeIcon icon={faEnvelopeOpen} size="2x"/></td>
                        <td><a href="mailto:denkievits@gmail.com">denkievits@gmail.com</a></td>
                      </tr>
                      <tr>
                        <td><FontAwesomeIcon icon={faGithub} size="2x"/></td>
                        <td><a href="https://www.github.com/elertan/">@elertan</a></td>
                      </tr>
                      <tr>
                        <td><FontAwesomeIcon icon={faLinkedin} size="2x"/></td>
                        <td><a href="https://www.linkedin.com/in/denniskievits/">Dennis Kievits</a></td>
                      </tr>
                      <tr>
                        <td><FontAwesomeIcon icon={faDiscord} size="2x"/></td>
                        <td>Elertan#8907</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={classnames.mapContainer}>
                    <MapComponent/>
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

export default ContactSection;
