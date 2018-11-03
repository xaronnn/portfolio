import * as React from 'react';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

const classnames = require('./NavBar.scss');
const classnamesMobile = require('./NavBarMobile.scss');

interface IProps {
}

interface IState {
  open: boolean;
}

interface INavItem {
  content: string;
}

const navItems: INavItem[] = [
  {content: 'Home'},
  {content: 'Skills'},
  {content: 'Projects'},
  {content: 'Contact'}
];

const switchWidth = 768;

class NavBar extends React.Component<IProps, IState> {
  public state = {
    open: false
  };

  public render() {
    return (
      <>
        <MediaQuery query={`(min-width: ${switchWidth}px)`}>
          <nav className={classnames.root}>
            <ul className={classnames.navList}>
              {navItems.map((navItem, i) => {
                const classname = classNames(
                  classnames.navItem,
                  {[classnames.navItemSelected]: navItem.content === 'Home'}
                );

                return (
                  <li key={i} className={classname}>{navItem.content}</li>
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
                  {[classnamesMobile.navItemSelected]: navItem.content === 'Home'}
                );

                return (
                  <li key={i} className={classname}>{navItem.content}</li>
                );
              })}
            </ul>
          </div>
        </MediaQuery>
      </>
    );
  }

  private handleIconClick = () => {
    this.setState((prevState: IState) => ({open: !prevState.open}));
  };
};

export default NavBar;
