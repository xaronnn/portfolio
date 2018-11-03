import * as React from 'react';
import Container from "../../layout/Container/Container";
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";
import Waypoint from "react-waypoint";

const classnames = require('./SkillsSection.scss');

interface IProps {
}

class SkillsSection extends React.Component<IProps> {
  public render() {
    return (
      <Subscribe to={[NavigationContainer]}>
        {(navigation: NavigationContainer) =>
          (<Waypoint onEnter={() => navigation.setRouteName(RouteName.Skills)}>
              <section className={classnames.root} id={RouteName.Skills}>
                <Container>
                  <>
                    <div className={classnames.container}>
                      <div>
                        <h1 className={classnames.title}>Skills</h1>
                      </div>

                      <div className={classnames.grid}>
                        <div className={classnames.gridItem}>
                          <h4>Languages</h4>
                          <div className={classnames.gridItemList}>
                            <ul>
                              <li>C#</li>
                              <li>Javascript</li>
                              <li>Typescript</li>
                              <li>HTML(5)</li>
                              <li>CSS(3)</li>
                              <li>SASS</li>
                              <li>Python</li>
                              <li>Rust</li>
                              <li>Dart</li>
                              <li>Lua</li>
                              <li>Java</li>
                              <li>C/C++</li>
                              <li>Swift</li>
                              <li>ASM (x86 and x86_64)</li>
                            </ul>
                          </div>
                        </div>

                        <div className={classnames.gridItem}>
                          <h4>Technology Stack</h4>
                          <div className={classnames.gridItemList}>
                            <ul>
                              <li>Node</li>
                              <li>ElasticSearch</li>
                              <li>GraphQL</li>
                              <li>.NET Core</li>
                              <li>.NET Framework</li>
                              <li>Mono</li>
                              <li>Nginx</li>
                              <li>Docker</li>
                            </ul>
                          </div>
                        </div>

                        <div className={classnames.gridItem}>
                          <h4>Frameworks/Libaries</h4>
                          <div className={classnames.gridItemList}>
                            <ul>
                              <li>
                                React (JS / Native)
                                <ul>
                                  <li>Redux</li>
                                  <li>Formik</li>
                                  <li>Material UI</li>
                                  <li>Semantic UI</li>
                                  <li>Apollo</li>
                                </ul>
                              </li>
                              <li>WPF / UWP</li>
                              <li>
                                Xamarin(.Forms)
                                <ul>
                                  <li>FFImageLoading</li>
                                </ul>
                              </li>
                              <li>Flutter</li>
                            </ul>
                          </div>
                        </div>

                        <div className={classnames.gridItem}>
                          <h4>Tools</h4>
                          <div className={classnames.gridItemList}>
                            <ul>
                              <li>Photoshop</li>
                              <li>Microsoft Office</li>
                              <li>Visual Studio</li>
                              <li>JetBrains IDEs</li>
                              <li>IDA Dissasembler</li>
                              <li>Hopper</li>
                              <li>VCS (git)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>

                    <h3 className={classnames.textBlockHeading}>Software</h3>
                    <div>
                      <p className={classnames.textBlock}>
                        Experience with working with <span className="bold">Windows</span>, <span
                        className="bold">Linux</span>,
                        and <span className="bold">MacOS</span>. But I do prefer working on an unix based OS.
                      </p>

                      <p className={classnames.textBlock}>
                        Experience with cross-platform development targetting <span className="bold">Web</span>, <span
                        className="bold">Windows</span>, <span className="bold">MacOS</span>, <span
                        className="bold">iOS</span>, <span className="bold">Android</span>, and <span
                        className="bold">Embedded Systems</span>.
                      </p>

                      <p className={classnames.textBlock}>
                        Experience with good software architecture design principles / orchestration such as <span
                        className="bold">SOLID</span>, <span className="bold">Microservices</span>, and <span
                        className="bold">Containerization</span>.
                      </p>

                      <p className={classnames.textBlock}>
                        Experience with Continious Integration (CI) / Continious Delivery (CD) services such as <span
                        className="bold">Travis CI</span>, and <span className="bold">Circle CI</span>.
                      </p>
                    </div>

                    <h3 className={classnames.textBlockHeading}>Teamwork</h3>
                    <div>
                      <p className={classnames.textBlock}>
                        Experience working as a team using methodologies such as <span
                        className="bold">Agile (Scrum)</span>,
                        and <span className="bold">Waterfall</span>.
                      </p>
                    </div>

                    <h3 className={classnames.textBlockHeading}>Future Goals</h3>
                    <div>
                      <p className={classnames.textBlock}>
                        I'm really excited about <span className="bold">Machine Learning</span>, because of the new
                        possibilities it unlocks for the application of software on more abstract use cases.
                      </p>

                      <p className={classnames.textBlock}>
                        I'm currently researching / studying one of the more popular libaries from Google, <span
                        className="bold">Tensorflow</span>, and I'd love to develop something new using this
                        technology.
                      </p>
                    </div>
                  </>
                </Container>
              </section>
            </Waypoint>
          )}
      </Subscribe>
    );
  }
};

export default SkillsSection;
