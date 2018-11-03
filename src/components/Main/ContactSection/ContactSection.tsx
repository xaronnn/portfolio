import * as React from 'react';
import Container from "../../layout/Container/Container";
const classnames = require('./ContactSection.scss');

interface IProps {}

class ContactSection extends React.Component<IProps> {
  public render() {
    return (
      <section className={classnames.root}>
        <Container>
          <div className={classnames.container}>
            <h1 className={classnames.title}>Contact</h1>
          </div>
        </Container>
      </section>
    );
  }
};

export default ContactSection;
