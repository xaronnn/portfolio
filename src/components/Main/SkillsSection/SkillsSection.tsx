import * as React from 'react';
import Container from "../../layout/Container/Container";
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";
import Waypoint from "react-waypoint";

const classnames = require('./SkillsSection.scss');

interface ITextIconItem {
  title: string;
  imageSource: string;
}

const csharpImg = require('./languages/csharp.png');
const javascriptImg = require('./languages/javascript.png');
const typescriptImg = require('./languages/typescript.png');
const html5Img = require('./languages/html5.png');
const css3Img = require('./languages/css3.png');
const sassImg = require('./languages/sass.png');
const mysqlImg = require('./languages/mysql.png');
const mssqlImg = require('./languages/mssql.png');
const postgresImg = require('./languages/postgres.png');
const pythonImg = require('./languages/python.png');
const rustImg = require('./languages/rust.png');
const dartImg = require('./languages/dart.png');
const luaImg = require('./languages/lua.png');
const phpImg = require('./languages/php.png');
const javaImg = require('./languages/java.png');
const cImg = require('./languages/c.png');
const cppImg = require('./languages/cpp.png');
const swiftImg = require('./languages/swift.png');
const asmImg = require('./languages/asm.png');

const languages: ITextIconItem[] = [
  { title: "C#", imageSource: csharpImg },
  { title: "Javascript", imageSource: javascriptImg },
  { title: "Typescript", imageSource: typescriptImg },
  { title: "HTML5", imageSource: html5Img },
  { title: "CSS3", imageSource: css3Img },
  { title: "SASS", imageSource: sassImg },
  { title: "MySQL", imageSource: mysqlImg },
  { title: "MSSQL", imageSource: mssqlImg },
  { title: "Postgres", imageSource: postgresImg },
  { title: "Python", imageSource: pythonImg },
  { title: "Rust", imageSource: rustImg },
  { title: "Dart", imageSource: dartImg },
  { title: "Lua", imageSource: luaImg },
  { title: "PHP", imageSource: phpImg },
  { title: "Java", imageSource: javaImg },
  { title: "C", imageSource: cImg },
  { title: "C++", imageSource: cppImg },
  { title: "Swift", imageSource: swiftImg },
  { title: "ASM", imageSource: asmImg },
];

const nodejsImg = require('./technologies/nodejs.png');
const graphqlImg = require('./technologies/graphql.png');
const elastichsearchImg = require('./technologies/elasticsearch.png');
const dotnetcoreImg = require('./technologies/dotnetcore.png');
const dotnetframeworkImg = require('./technologies/dotnetframework.png');
const monoImg = require('./technologies/mono.png');
const nginxImg = require('./technologies/nginx.png');
const dockerImg = require('./technologies/docker.png');

const technologies: ITextIconItem[] = [
  { title: "NodeJS", imageSource: nodejsImg },
  { title: "GraphQL", imageSource: graphqlImg },
  { title: "ElasticSearch", imageSource: elastichsearchImg },
  { title: ".NET Core", imageSource: dotnetcoreImg },
  { title: ".NET Framework", imageSource: dotnetframeworkImg },
  { title: "Mono", imageSource: monoImg },
  { title: "Nginx", imageSource: nginxImg },
  { title: "Docker", imageSource: dockerImg },
];

const reactjsImg = require('./frameworks-libs/reactjs.png');
const reactnativeImg = require('./frameworks-libs/reactnative.png');
const reduxImg = require('./frameworks-libs/redux.png');
const formikImg = require('./frameworks-libs/formik.jpg');
const materialUiImg = require('./frameworks-libs/material-ui.svg');
const semanticUiImg = require('./frameworks-libs/semantic-ui.png');
const apolloImg = require('./frameworks-libs/apollo.png');
const wpfImg = require('./frameworks-libs/wpf.png');
const uwpImg = require('./frameworks-libs/uwp.png');
const xamarinImg = require('./frameworks-libs/xamarin.png');
const xamarinFormsImg = require('./frameworks-libs/xamarin-forms.png');
const ffimageloadingImg = require('./frameworks-libs/ffimageloading.png');
const flutterImg = require('./frameworks-libs/flutter.png');

const frameworksLibs: ITextIconItem[] = [
  { title: "ReactJS", imageSource: reactjsImg },
  { title: "React Native", imageSource: reactnativeImg },
  { title: "Redux", imageSource: reduxImg },
  { title: "Formik", imageSource: formikImg },
  { title: "Material UI", imageSource: materialUiImg },
  { title: "Semantic UI", imageSource: semanticUiImg },
  { title: "Apollo", imageSource: apolloImg },
  { title: "WPF", imageSource: wpfImg },
  { title: "UWP", imageSource: uwpImg },
  { title: "Xamarin", imageSource: xamarinImg },
  { title: "Xamarin.Forms", imageSource: xamarinFormsImg },
  { title: "FFImageLoading", imageSource: ffimageloadingImg },
  { title: "Flutter", imageSource: flutterImg },
];

const photoshopImg = require('./tools/photoshop.png');
const officeImg = require('./tools/office.png');
const visualstudioImg = require('./tools/visualstudio.png');
const jetbrainsImg = require('./tools/jetbrains.png');
const idaImg = require('./tools/ida.png');
const hopperImg = require('./tools/hopper.png');
const gitImg = require('./tools/git.png');

const tools: ITextIconItem[] = [
  { title: "Photoshop", imageSource: photoshopImg },
  { title: "Microsoft Office", imageSource: officeImg },
  { title: "Visual Studio", imageSource: visualstudioImg },
  { title: "Jetbrains IDE", imageSource: jetbrainsImg },
  { title: "IDA", imageSource: idaImg },
  { title: "Hopper", imageSource: hopperImg },
  { title: "GIT", imageSource: gitImg },
];

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
                      <h1 className={classnames.title}>Skills</h1>

                      <h2 className="text-center">Languages</h2>
                      <div className={classnames.grid}>
                        {languages.map((language, i) => (
                          <div className={classnames.iconGridItem} key={i}>
                            <img
                              className={classnames.iconGridItemIcon}
                              src={language.imageSource}
                            />
                            <p className={classnames.iconGridItemTitle}>{language.title}</p>
                          </div>
                        ))}
                      </div>

                      <h2 className="text-center">Technologies</h2>
                      <div className={classnames.grid}>
                        {technologies.map((technology, i) => (
                          <div className={classnames.iconGridItem} key={i}>
                            <img
                              className={classnames.iconGridItemIcon}
                              src={technology.imageSource}
                            />
                            <p className={classnames.iconGridItemTitle}>{technology.title}</p>
                          </div>
                        ))}
                      </div>

                      <h2 className="text-center">Frameworks / Libraries</h2>
                      <div className={classnames.grid}>
                        {frameworksLibs.map((frameworkLib, i) => (
                          <div className={classnames.iconGridItem} key={i}>
                            <img
                              className={classnames.iconGridItemIcon}
                              src={frameworkLib.imageSource}
                            />
                            <p className={classnames.iconGridItemTitle}>{frameworkLib.title}</p>
                          </div>
                        ))}
                      </div>

                      <h2 className="text-center">Tools</h2>
                      <div className={classnames.grid}>
                        {tools.map((tool, i) => (
                          <div className={classnames.iconGridItem} key={i}>
                            <img
                              className={classnames.iconGridItemIcon}
                              src={tool.imageSource}
                            />
                            <p className={classnames.iconGridItemTitle}>{tool.title}</p>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div>
                      <p className={classnames.textBlock}>
                        Experience with:
                      </p>
                      <div className="center-inside">
                        <ul>
                          <li>
                            <p>
                              Major operating systems: <span className="bold">Windows</span>, <span
                              className="bold">Linux</span>,
                              and <span className="bold">MacOS</span>. I'm rocking a MacBook Pro though!
                            </p>
                          </li>
                          <li>
                            <p>
                              Cross-platform development targeting <span className="bold">Web</span>, <span
                              className="bold">Windows</span>, <span className="bold">MacOS</span>, <span
                              className="bold">iOS</span>, <span className="bold">Android</span>, and <span
                              className="bold">Embedded Systems</span>.
                            </p>
                          </li>
                          <li>
                            <p>
                              Architecture design principles / orchestration such as <span
                              className="bold">SOLID</span>, <span className="bold">Microservices</span>, and <span
                              className="bold">Containerization</span>.
                            </p>
                          </li>
                          <li>
                            <p>
                              Design patterns such as <span className="bold">Singleton</span>, <span className="bold">Factory</span>, and <span className="bold">Observer</span>.
                            </p>
                          </li>
                          <li>
                            <p>
                              Architecture styles such as <span
                              className="bold">REST</span>, <span className="bold">SOAP</span>, <span className="bold">MVC</span>, and <span className="bold">MVVM</span>.
                            </p>
                          </li>
                          <li>
                            <p>
                              CI / CD services such as <span
                              className="bold">Travis CI</span> and <span className="bold">Circle CI</span>.
                            </p>
                          </li>
                          <li>
                            <p>
                              Development practices such as <span
                              className="bold">TDD</span>, <span className="bold">BDD</span>, and <span className="bold">DDD</span>.
                            </p>
                          </li>
                          <li>
                            <p>
                              Security vunerabilities such as <span className="bold">SQL Injection</span> and <span className="bold">XSS</span>.
                            </p>
                          </li>
                          <li>
                            <p>
                              Teamwork / SDLC using methodologies such as <span
                              className="bold">Agile (Scrum/Kanban)</span> and <span className="bold">Waterfall</span>.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/*<h3 className={classnames.textBlock}>Future interests</h3>*/}
                    {/*<div>*/}
                      {/*<p className={classnames.textBlock}>*/}
                        {/*I'm really excited about <span className="bold">Machine Learning</span>, because of the new*/}
                        {/*possibilities it unlocks for the application of software on more abstract use cases.*/}
                      {/*</p>*/}

                      {/*<p className={classnames.textBlock}>*/}
                        {/*I'm currently researching / studying one of the more popular libaries from Google, <span*/}
                        {/*className="bold">Tensorflow</span>, and I'd love to develop something new using this*/}
                        {/*technology.*/}
                      {/*</p>*/}
                    {/*</div>*/}
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
