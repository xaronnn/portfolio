import * as React from 'react';
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import HomeSection from "./HomeSection/HomeSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import ContactSection from "./ContactSection/ContactSection";
import PersonalitySection from "./PersonalitySection/PersonalitySection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
const classnames = require('./Main.scss');

interface IProps {}
interface IState {}

class Main extends React.Component<IProps, IState> {
  public state = {};

  public render() {
    return (
      <div className={classnames.root}>
        <HomeSection/>
        <SkillsSection/>
        <PersonalitySection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <ContactSection/>
      </div>
    );
  }
};

export default Main;
