import * as React from 'react';
import PersonaliaSection from "./PersonaliaSection/PersonaliaSection";
import LandingSection from "./LandingSection/LandingSection";
const classnames = require('./Main.scss');

interface IProps {}
interface IState {}

class Main extends React.Component<IProps, IState> {
  public state = {};

  public render() {
    return (
      <div className={classnames.root}>
        <LandingSection/>
        <PersonaliaSection/>
      </div>
    );
  }
};

export default Main;
