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
      <Header fixed={false} float={false} splash={false} size='small'>
        <Box flex={true} justify='end' direction='row' responsive={false}>
          <Menu icon={<Actions />} dropAlign={{ right: 'right' }}>
            <Anchor href='#' className='active'>
              First
            </Anchor>
            <Anchor href='#'>Second</Anchor>
            <Anchor href='#'>Third</Anchor>
          </Menu>
        </Box>
      </Header>
    );
  }
}

export default Navigation;
