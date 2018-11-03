import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const classnames = require('./HomeSection.scss');
const meImg = require('./me-transparent.png');

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
      <section className={classnames.root}>
        <div className={classnames.backgroundContainer}/>
        <div className={classnames.content}>
          <img
            className={classnames.imgMe}
            src={meImg}
          />
          <h1 className={classnames.name}>Dennis Kievits</h1>
          <h4 className={classnames.position}>Software Engineer & Entrepeneur</h4>
          <h5 className={classnames.bio}>$ ZSH, VI, and Unix enthusiast</h5>
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
    );
  }
};

export default HomeSection;
