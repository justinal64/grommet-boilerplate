import React, { Component } from 'react';

import Headline from 'grommet/components/Headline';
import Section from 'grommet/components/Section';

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='aboutme-bg'>
        <Section pad='large' justify='center' align='center' full='vertical'>
          <Headline margin='none'>AboutMe</Headline>
        </Section>
      </div>
    );
  }
}

export default AboutMe;
