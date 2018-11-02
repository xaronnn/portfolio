import * as React from 'react';
const classnames = require('./Container.scss');

interface IProps {
  children?: JSX.Element | null;
}

const Container: React.SFC<IProps> = (props: IProps) => {
  return (
    <div className={classnames.root}>
      <div className={classnames.content}>
        {props.children}
      </div>
    </div>
  );
};

export default Container;
