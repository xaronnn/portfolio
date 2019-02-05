interface IWorkingExperience {
  position: string;
  description: string;
  companyName: string;
  icon: string;
  cover: string;
  from: Date;
  to: Date | null;
  location: string;
}

export default IWorkingExperience;
