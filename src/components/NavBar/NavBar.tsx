import * as React from 'react';
const classnames = require('./NavBar.scss');

interface IProps {}

interface INavItem {
  content: string;
}

const navItems: INavItem[] = [
  { content: 'Landing' },
  { content: 'Personalia' },
  { content: 'Projects' },
  { content: 'Contact' }
];

class NavBar extends React.Component<IProps> {
  public render() {
    return (
      <nav className={classnames.root}>
        <ul className={classnames.navList}>
          {navItems.map((navItem, i) =>
            <li key={i} className={classnames.navItem}>{navItem.content}</li>
          )}
        </ul>
      </nav>
    );
  }
};

export default NavBar;
