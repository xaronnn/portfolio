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

const items = [
  {
    head: "Devoted",
    detail: "I am a very devoted type of person when it comes to computer science, all of it just really interests me and keeps me thinking."
  },
  {
    head: "Organized",
    detail: "I like to work organized, good structure during projects is really important in terms of code and as a team."
  },
  {
    head: "Independent",
    detail: "I can work on my own very well, mostly due to having accumulated a lot of experience of the years by actively studying and working on projects."
  },
  {
    head: "Determined",
    detail: "I am determined to make things work, I really don't like to give up on something."
  },
  {
    head: "Cooperative",
    detail: "I am a team oriented person, good social skills and communication are very important for a project to go as planned."
  },
  {
    head: "Responsible",
    detail: "I take responsibility for the work I deliver to be of quality."
  }
];

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
                <table>
                  <tbody>
                  {items.map((item, i) => (
                    <tr className={classnames.personalityContainer}>
                      <td className={classnames.personalityHeadText}>
                        {item.head}
                      </td>
                      <td>
                        {item.detail}
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
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
