import * as React from 'react';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import NavigationContainer, {RouteName} from "../../containers/NavigationContainer";
import {Subscribe} from "unstated";

const classnames = require('./NavBar.scss');
const classnamesMobile = require('./NavBarMobile.scss');

interface IProps {
}

interface IState {
  open: boolean;
}

interface INavItem {
  content: string;
  routeName: RouteName;
}

const navItems: INavItem[] = [
  {content: 'Home', routeName: RouteName.Home},
  {content: 'Skills', routeName: RouteName.Skills},
  {content: 'Personality', routeName: RouteName.Personality},
  {content: 'Projects', routeName: RouteName.Projects},
  {content: 'Contact', routeName: RouteName.Contact},
];

const switchWidth = 768;

class NavBar extends React.Component<IProps, IState> {
  public state = {
    open: false
  };

  public render() {
    return (
      <Subscribe to={[NavigationContainer]}>
        {navigation => (
          <>
            <MediaQuery query={`(min-width: ${switchWidth + 1}px)`}>
              <nav className={classnames.root}>
                <ul className={classnames.navList}>
                  {navItems.map((navItem, i) => {
                    const classname = classNames(
                      classnames.navItem,
                      {[classnames.navItemSelected]: navItem.routeName === navigation.state.routeName}
                    );

                    return (
                      <li key={i} className={classname} onClick={this.handleNavItemClick(navItem.routeName)}>{navItem.content}</li>
                    );
                  })}
                </ul>
              </nav>
            </MediaQuery>
            <MediaQuery query={`(max-width: ${switchWidth}px)`}>
              <nav className={classnamesMobile.root}>
                <div
                  className={classnamesMobile.menuIcon}
                  onClick={this.handleIconClick}
                >
                  <FontAwesomeIcon icon={faBars} size="2x"/>
                </div>
              </nav>
              <div className={classNames(classnamesMobile.menuContainer, {
                [classnamesMobile.menuContainerHidden]: !this.state.open
              })}>
                <ul className={classnamesMobile.navList}>
                  {navItems.map((navItem, i) => {
                    const classname = classNames(
                      classnamesMobile.navItem,
                      {[classnamesMobile.navItemSelected]: navItem.routeName === navigation.state.routeName}
                    );

                    return (
                      <li key={i} className={classname} onClick={this.handleNavItemClick(navItem.routeName)}>{navItem.content}</li>
                    );
                  })}
                </ul>
              </div>
            </MediaQuery>
          </>
        )}
      </Subscribe>
    );
  }

  private handleIconClick = () => {
    this.setState((prevState: IState) => ({open: !prevState.open}));
  };

  private handleNavItemClick = (routeName: RouteName) => () => {
    const element = document.getElementById(routeName);
    element!.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
};

export default NavBar;
