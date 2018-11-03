import * as React from 'react';
import Container from "../../layout/Container/Container";

const classnames = require('./SkillsSection.scss');

interface IProps {
}

class SkillsSection extends React.Component<IProps> {
  public render() {
    return (
      <section className={classnames.root}>
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
                      <li>HTML</li>
                      <li>CSS (SASS)</li>
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

            <p className={classnames.textBlock}>
              Experience with working with <span className="bold">Windows</span>, <span className="bold">Linux</span>, and <span className="bold">MacOS</span>. But I do prefer working on an unix based OS.
            </p>

            <p className={classnames.textBlock}>
              Experience with cross-platform development targetting <span className="bold">Web</span>, <span className="bold">Windows</span>, <span className="bold">MacOS</span>, <span className="bold">iOS</span>, <span className="bold">Android</span>, and <span className="bold">Embedded Systems</span>.
            </p>

            <p className={classnames.textBlock}>
              Experience with good software architecture design principles / orchestration such as <span className="bold">SOLID</span>, <span className="bold">Microservices</span>, and <span className="bold">Containerization</span>.
            </p>
          </>
        </Container>
      </section>
    );
  }
};

export default SkillsSection;
