import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import Waypoint from "react-waypoint";
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";

const classnames = require('./HomeSection.scss');
const meImg = require('./me.jpg');

interface IProps {
}

interface IMedium {
  icon: IconProp;
  url: string;
}

const media: IMedium[] = [
  {icon: faGithub, url: "https://www.github.com/elertan/"},
  {icon: faLinkedin, url: "https://www.linkedin.com/in/denniskievits/"},
  {icon: faEnvelope, url: "mailto:denkievits@gmail.com"},
];

class HomeSection extends React.Component<IProps> {
  public render() {
    return (
      <Subscribe to={[NavigationContainer]}>
        {(navigation: NavigationContainer) => (
          <Waypoint onEnter={() => navigation.setRouteName(RouteName.Home)} fireOnRapidScroll>
            <section className={classnames.root} id={RouteName.Home}>
              <div className={classnames.backgroundContainer}/>
              <div className={classnames.content}>
                <img
                  className={classnames.imgMe}
                  src={meImg}
                />
                <h1 className={classnames.name}>Dennis Kievits</h1>
                <h4 className={classnames.position}>Software Engineer & Entrepeneur</h4>
                <code className={classnames.bio}>~ $ cat ~/.zshrc | unix --enthusiast && nvim</code>
                <div>
                  {media.map((medium, i) =>
                    <a
                      key={i}
                      className={classnames.mediumLink}
                      href={medium.url}
                    >
                      <FontAwesomeIcon
                        className={classnames.mediumIcon}
                        icon={medium.icon}
                        size="2x"
                      />
                    </a>
                  )}
                </div>
              </div>
            </section>
          </Waypoint>
        )}
      </Subscribe>
    );
  }
};

export default HomeSection;
