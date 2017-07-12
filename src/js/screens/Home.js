import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import App from 'grommet/components/App';
// import Split from 'grommet/components/Split';

// import NavSidebar from './NavSidebar';
// import { navResponsive } from '../actions/nav';

// import Login from '../screens/Login';
// import Dashboard from '../screens/Dashboard';
// import Tasks from '../screens/Tasks';
// import Task from '../screens/Task';
// import NotFound from '../screens/NotFound';

import Article from 'grommet/components/Article';
import Headline from 'grommet/components/Headline';
import Section from 'grommet/components/Section';
import Intro from '../sections/Intro';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { nav: { active: navActive, enabled: navEnabled, responsive } } = this.props;
    // const includeNav = navActive && navEnabled;
    // let nav;
    // if (includeNav) {
    //   nav = <NavSidebar />;
    // }
    // const priority = includeNav && responsive === 'single' ? 'left' : 'right';

    return (
      <Article scrollStep={true} controls={true}>
        <Intro />
        <Section pad='large' justify='center' align='center' full='vertical' colorIndex='grey-4'>
          <Headline margin='none'>Section 2</Headline>
        </Section>
        <Section pad='large' justify='center' align='center' full='vertical'>
          <Headline margin='none'>Section 3</Headline>
        </Section>
        <Section pad='large' justify='center' align='center' full='vertical' colorIndex='grey-4'>
          <Headline margin='none'>Section 4</Headline>
        </Section>
        <Section pad='large' justify='center' align='center' full='vertical'>
          <Headline margin='none'>Section 5</Headline>
        </Section>
      </Article>
    );
  }
}

// Home.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.shape({
//     active: PropTypes.bool,
//     enabled: PropTypes.bool,
//     responsive: PropTypes.string,
//   }),
// };

// const select = state => ({
//   nav: state.nav,
// });

// export default connect(select)(Home);
export default Home;
