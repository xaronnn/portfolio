import * as React from "react";
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";
import Waypoint from "react-waypoint";
import Container from "../../layout/Container/Container";
import IWorkingExperience from "./IWorkingExperience";
import WorkingExperience from "./WorkingExperience";

const classnames = require('./ExperienceSection.scss');

const workingExperiences: IWorkingExperience[] = [
  {
    position: "Owner & Lead Software Engineer",
    companyName: "Alavon",
    icon: require("./companies/alavon/icon.png"),
    cover: require("./companies/alavon/cover.jpg"),
    from: new Date(2017, 10),
    to: null,
    location: "Zwijndrecht, The Netherlands",
    description: `+ Owner & Lead Software Developer of an innovative company.`,
  },
  {
    position: "Software Engineer (Project)",
    companyName: "Splash Lease",
    icon: require("./companies/splash-lease/icon.png"),
    cover: require("./companies/splash-lease/cover.png"),
    from: new Date(2018, 1),
    to: null,
    location: "Utrecht, The Netherlands",
    description: `Realised a solution for Splash Lease's new management software that interacts on their dataset, which consists of a wide variety of management functionalities. Some of these functionalities consists of--but are not limited by:

+ Customer: Invoice Management, Communication Control (Custom SMS-, Phone- and Email clients) for helpdesk integration.
+ Logistics: Commission Management.
As well as Financial and Administrative capabilities.

The web application was built using ReactJS, Redux and SocketIO, which is connected to a custom made web API running on NodeJS that allows for seamless realtime integration of data flow.

This was all built with the help of Typescript tooling, and many different NPM modules such as Formik, GoldenLayout, MaterialUI, ReactRouter.`
  },
  {
    position: "Software Developer",
    companyName: "IT Partner BV",
    icon: require("./companies/it-partner/icon.png"),
    cover: require("./companies/it-partner/cover.jpg"),
    from: new Date(2017, 8),
    to: new Date(2017, 11),
    location: "Hendrik-Ido-Ambacht, The Netherlands",
    description: `+ Contributed to development of an UWP application for Windows Mobile (embedded devices with barcode scanning capabilities) with the use of strict Agile Development (scrum), communicating with API's and managing a large port logistics infrastructure.`
  },
  {
    position: "Software Developer Internship",
    companyName: "ITIS",
    icon: require("./companies/itis/icon.png"),
    cover: require("./companies/itis/cover.jpg"),
    from: new Date(2017, 2),
    to: new Date(2017, 6),
    location: "Barendrecht, The Netherlands",
    description: `+ Developed a software utility to extract data from a generic/flexible form of XML and converted it into entities stored in a EntityFramework managed database.
+ Development cycle was conform to Agile (scrum).`
  },
  {
    position: "Software Developer Internship",
    companyName: "Unique Webdesign",
    icon: require("./companies/unique-webdesign/icon.png"),
    cover: require("./companies/unique-webdesign/cover.png"),
    from: new Date(2016, 2),
    to: new Date(2016, 5),
    location: "Alblasserdam, The Netherlands",
    description: `+ Maintained and contributed to developing multiple web applications written in PHP and Javascript.
+ Developed a Xamarin.Forms cross-platform mobile app for truck drivers to get a good overview of their most nearby gas stations, this includes--authorization techniques, push notifications and communicating with web api's.`
  }
];


interface IProps {
}

const ExperienceSection: React.FunctionComponent<IProps> = (props) => {
  return (
    <Subscribe to={[NavigationContainer]}>
      {(navigation: NavigationContainer) => (
        <section className={classnames.root} id={RouteName.Experience}>
          <Container>
            <div className={classnames.container}>
              <Waypoint fireOnRapidScroll onEnter={() => navigation.setRouteName(RouteName.Experience)}>
                <h2 className={classnames.title}>Experience</h2>
              </Waypoint>
              <div className={classnames.workingExperience}>
                <h3>Work</h3>
                {workingExperiences.map((we, i) => <WorkingExperience key={i} workingExperience={we}/>)}
              </div>
              <h3>Education</h3>
            </div>
          </Container>
        </section>
      )}
    </Subscribe>
  );
};

export default ExperienceSection;
