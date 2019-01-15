import * as React from 'react';
import {Subscribe} from "unstated";
import NavigationContainer, {RouteName} from "../../../containers/NavigationContainer";
import Waypoint from "react-waypoint";



const classnames = require('./ProjectsSection.scss');

interface IProject {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink?: string;
}

interface IProjectGridRowItem {
  project: IProject;
  flex: number;
}

const projects: IProjectGridRowItem[][] = [
  [
    {
      project: {
        title: "Music Webshop",
        description: "A digital music platform that offers tracks and albums",
        imageUrl: require("./project-c-webshop/explore-page.png"),
        technologies: ["C#", ".NET Core", "GraphQL", "ReactJS", "TypeScript"],
        githubLink: "https://github.com/elertan/project-c-webshop"
      },
      flex: 2
    },
    {
      project: {
        title: "Amino Tools",
        description: "A mobile application that extends the functionalities of Amino, a multi community app for iOS and Android",
        imageUrl: require("./amino-tools/image.png"),
        technologies: ["C#", "Xamarin.Forms", "FFImageLoading"],
        githubLink: "https://github.com/elertan/aminotools"
      },
      flex: 1
    }
  ],
  [
    {
      project: {
        title: "ASP System",
        description: "A fully integrated custom environment used by Splash Lease B.V.",
        imageUrl: require('./asp-systeem/1.jpg'),
        technologies: ["NodeJS", "TypeScript", "ReactJS", "Redux"]
      },
      flex: 1
    },
    {
      project: {
        title: "AnimeViewer",
        description: "A cross platform mobile app that allows you to view animes for free without ads!",
        imageUrl: require('./animeviewer/player.jpg'),
        technologies: ["C#", "Xamarin.Forms", "FFImageLoading"],
        githubLink: "https://github.com/elertan/animeviewer"
      },
      flex: 1
    },
  ],
  [
    {
      project: {
        title: "HR Minigames",
        description: "A game full of minigames! What's not to like? Each minigame in it's own sandboxed environment.",
        imageUrl: require("./hr-minigames/image.png"),
        technologies: ["Python", "PyGame"],
        githubLink: "https://github.com/elertan/HR-Minigames"
      },
      flex: 1
    },
    {
      project: {
        title: "League of Memories",
        description: "The client of League of Memories, a community driven version of League of Legends back in season 4.",
        imageUrl: require("./league-of-memories/client.png"),
        technologies: ["NodeJS", "Electron", "TypeScript", "GraphQL", "Redux"],
        githubLink: "https://github.com/elertan/Client"
      },
      flex: 2
    },
  ]
];

interface IProps {
}

class ProjectsSection extends React.Component<IProps> {
  public render() {
    return (
      <Subscribe to={[NavigationContainer]}>
        {(navigation: NavigationContainer) => (
          <Waypoint onEnter={() => navigation.setRouteName(RouteName.Projects)} fireOnRapidScroll>
            <section className={classnames.root} id={RouteName.Projects}>
              <div className={classnames.container}>
                <div>
                  <h1 className={classnames.title}>Projects</h1>
                </div>
                <div>
                  {projects.map((rowProjects, rowI) => (
                    <div
                      key={rowI}
                      className={classnames.projectsRow}
                    >
                      {rowProjects.map((project, i) => (
                        <article
                          key={i}
                          className={classnames.project}
                          style={{
                            flex: project.flex
                          }}
                        >
                          <div
                            className={classnames.projectContent}
                            style={{
                              backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${project.project.imageUrl})`
                            }}
                          >
                            <h3 className={classnames.projectTitle}>{project.project.title}</h3>
                            <p className={classnames.projectDescription}>{project.project.description}</p>
                            <div className={classnames.filler} />
                            <p className={classnames.projectSource}>
                              {project.project.githubLink === undefined ?
                                <span>Closed source project</span>
                                :
                                <a href={project.project.githubLink}>View on GitHub</a>
                              }
                            </p>
                            <p className={classnames.projectTechnologies}>
                              Created using {project.project.technologies.join(", ")}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>

                {/*<div className={classnames.grid}>*/}
                {/*<div*/}
                {/*className={classnames.gridItem}*/}
                {/*style={{*/}
                {/*background: `url(${aspSysteemImg}) center no-repeat`,*/}
                {/*backgroundSize: 'cover'*/}
                {/*}}*/}
                {/*>*/}
                {/*<div className={classnames.gridItemDarken} />*/}
                {/*<div className={classnames.gridItemContainer}>*/}
                {/*<h2>ASP System</h2>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
              </div>
            </section>
          </Waypoint>
        )}
      </Subscribe>
    );
  }
};

export default ProjectsSection;
