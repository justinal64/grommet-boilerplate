import React, { Component } from 'react';

import Headline from 'grommet/components/Headline';
import Section from 'grommet/components/Section';
import Navigation from '../components/Navigation';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='intro-bg'>
        <Section pad='large' justify='center' align='center' full='vertical'>
          <Navigation />
          <Headline margin='none'>Intro</Headline>
        </Section>
      </div>
    );
  }
}

export default Intro;
