import * as React from "react";
import IWorkingExperience from "./IWorkingExperience";
import moment from "moment";

const classnames = require('./WorkingExperience.scss');

interface IProps {
  workingExperience: IWorkingExperience;
}

// const present = new Date();

const WorkingExperience: React.FunctionComponent<IProps> = (props) => {
  const {
    position,
    companyName,
    location,
    description,
    icon,
    cover
  } = props.workingExperience;

  const from = moment(props.workingExperience.from);
  const to = props.workingExperience.to === null ? null : moment(props.workingExperience.to);

  return (
    <div className={classnames.root}>
      <div className={classnames.layout}>
        <div className={classnames.iconContainer}>
          <img src={icon} className={classnames.icon} />
        </div>
        <div style={{ flex: 1 }}>
          <div className={classnames.coverContainer} style={{ background: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${cover})` }} />
          <div className={classnames.contentContainer}>
            <p className={classnames.position}>{position}</p>
            <p className={classnames.companyName}>{companyName}</p>
            <p className={classnames.duration}>{from.format("MMM YYYY")} - {to === null ? "Present" : to.format("MMM YYYY")}</p>
            <p className={classnames.location}>{location}</p>
            <p className={classnames.description}>{description.split("\n").map((val, i) => <p key={i}>{val}</p>)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingExperience;
