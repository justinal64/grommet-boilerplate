import React, { Component } from 'react';

import Headline from 'grommet/components/Headline';
import Section from 'grommet/components/Section';

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='intro-bg'>
        <Section pad='large' justify='center' align='center' full='vertical'>
          <Headline margin='none'>Intro</Headline>
        </Section>
      </div>
    );
  }
}

export default Intro;
