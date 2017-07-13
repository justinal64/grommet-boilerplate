import React, { Component } from 'react';

import Headline from 'grommet/components/Headline';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Actions from 'grommet/components/icons/base/Actions';
import Anchor from 'grommet/components/Anchor';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

export default Navigation;
