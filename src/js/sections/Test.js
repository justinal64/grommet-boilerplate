import React, { Component } from "react";

import Headline from "grommet/components/Headline";
import Section from "grommet/components/Section";
import Hero from "grommet/components/Hero";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Image from "grommet/components/Image";
// import TestImg from '../../img/test.jpg';

// const test = require('../../img/test.jpg');

class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Image src={TestImg} /> */}
        <Image source={require("../../img/test.jpg")} />
        {/* <Hero background={<Image src={test} fit='cover' full={true} />} backgroundColorIndex='dark'>
          <Box direction='row' justify='center' align='center'>
            <Box basis='1/2' align='end' pad='medium' />
            <Box basis='1/2' align='start' pad='medium'>
              <Heading margin='none'>Sample Heading</Heading>
            </Box>
          </Box>
        </Hero> */}
      </div>
    );
  }
}

export default Test;
