import * as React from "react";
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";
import Container from "../../layout/Container/Container";
import Waypoint from "react-waypoint";
import Experience from "../ExperienceSection/Experience";
import IExperience from "../ExperienceSection/IExperience";

const classnames = require("./EducationSection.scss");

interface IProps {
}

const educationExperiences: IExperience[] = [
  {
    position: "Rotterdam University of Applied Sciences",
    companyName: "Bachelor of Applied Science (B.A.Sc.), Computer Science",
    from: new Date(2017, 6),
    to: new Date(2021, 6),
    icon: require("./images/hr/icon.png"),
    cover: require("./images/hr/cover.jpg"),
    location: "Rotterdam, The Netherlands",
    description: ""
  },
  {
    position: "Cisco Networking Academy",
    companyName: "Bachelor of Applied Science (B.A.Sc.), Cisco Networking, 9.6",
    from: new Date(2018, 11),
    to: new Date(2019, 1),
    icon: require("./images/cisco/icon.png"),
    cover: require("./images/cisco/cover.jpg"),
    location: "Rotterdam, The Netherlands",
    description: ""
  },
  {
    position: "Da Vinci College",
    companyName: "Intermediate Vocational Education, Computer Science",
    from: new Date(2014, 6),
    to: new Date(2017, 6),
    icon: require("./images/davinci/icon.jpg"),
    cover: require("./images/davinci/cover.jpg"),
    location: "Dordrecht, The Netherlands",
    description: ""
  },
];

const EducationSection: React.FunctionComponent<IProps> = (props) => {
  return (
    <Subscribe to={[NavigationContainer]}>
      {(navigation: NavigationContainer) => (
        <section className={classnames.root} id={RouteName.Education}>
          <Container>
            <div className={classnames.container}>
              <Waypoint fireOnRapidScroll onEnter={() => navigation.setRouteName(RouteName.Education)}>
                <h2 className={classnames.title}>Education</h2>
              </Waypoint>
              <div className={classnames.workingExperience}>
                {educationExperiences.map((we, i) => <Experience key={i} workingExperience={we}/>)}
              </div>
            </div>
          </Container>
        </section>
      )}
    </Subscribe>
  );
};

export default EducationSection;
