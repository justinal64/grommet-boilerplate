import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Article from 'grommet/components/Article';
import Headline from 'grommet/components/Headline';
import Section from 'grommet/components/Section';
import Intro from '../sections/Intro';
import Projects from '../sections/Projects';
import AboutMe from '../sections/AboutMe';
import Contact from '../sections/Contact';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Article scrollStep={true} controls={true}>
        <Intro />
        <AboutMe />
        <Projects />
        <Contact />
        {/* <Section pad='large' justify='center' align='center' full='vertical'>
          <Headline margin='none'>Section 3</Headline>
        </Section> */}
      </Article>
    );
  }
}

export default Home;
