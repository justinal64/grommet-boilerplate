import React, { Component } from 'react';

import Headline from 'grommet/components/Headline';
import Section from 'grommet/components/Section';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='projects-bg'>
        <Section pad='large' justify='center' align='center' full='vertical'>
          <Headline margin='none'>Projects</Headline>
        </Section>
      </div>
    );
  }
}

export default Projects;
