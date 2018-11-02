import * as React from 'react';
import classNames from 'classnames';
const classnames = require('./NavBar.scss');

interface IProps {
}

interface INavItem {
  content: string;
}

const navItems: INavItem[] = [
  {content: 'Home'},
  {content: 'Projects'},
  {content: 'Contact'}
];

class NavBar extends React.Component<IProps> {
  public render() {
    return (
      <nav className={classnames.root}>
        <ul className={classnames.navList}>
          {navItems.map((navItem, i) => {
            const classname = classNames(
              classnames.navItem,
              { [classnames.navItemSelected]: navItem.content === 'Home' }
            );

            return (
              <li key={i} className={classname}>{navItem.content}</li>
            );
          })}
        </ul>
      </nav>
    );
  }
};

export default NavBar;
