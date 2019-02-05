import * as React from 'react';
import {Container} from "unstated";

export enum RouteName {
  Home = "HOME_ROUTENAME",
  Skills = "SKILLS_ROUTENAME",
  Personality = "PERSONALITY_ROUTENAME",
  Experience = "EXPERIENCE_ROUTENAME",
  Projects = "PROJECTS_ROUTENAME",
  Contact = "CONTACT_ROUTENAME",
}

interface IState {
  routeName: RouteName;
}

class NavigationContainer extends Container<IState> {
  public state = {
    routeName: RouteName.Home
  };

  public setRouteName = (routeName: RouteName) => {
    this.setState({ routeName });
  };
}

export default NavigationContainer;
