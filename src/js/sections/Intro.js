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
          <Box direction='row' justify='start' wrap={true} pad='medium' margin='small'>
            <ul>
              <li>
                <a className='nav_link' href='#projects'>
                  Projects
                </a>
              </li>
              <li>
                <a className='nav_link' href='#contact'>
                  Contact
                </a>
              </li>
              <li>
                <a className='nav_link' href='#resume'>
                  Resume
                </a>
              </li>
            </ul>
          </Box>

          <Headline margin='none'>Intro</Headline>
        </Section>
      </div>
    );
  }
}

export default Intro;
