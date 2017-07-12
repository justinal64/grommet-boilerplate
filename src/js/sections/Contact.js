import React, { Component } from 'react';

import Headline from 'grommet/components/Headline';
import Section from 'grommet/components/Section';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='contact-bg'>
        <Section pad='large' justify='center' align='center' full='vertical'>
          <Headline margin='none'>Contact</Headline>
        </Section>
      </div>
    );
  }
}

export default Contact;
