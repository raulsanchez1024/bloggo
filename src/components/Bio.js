import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return <div style={{ display: 'flex', marginBottom: rhythm(2.5) }}>
        <img src={profilePic} alt={`Raul Sanchez`} style={{ marginRight: rhythm(1 / 2), marginBottom: 0, width: rhythm(2), height: rhythm(2) }} />
        <p>
          Personal bloggo by <a href="https://twitter.com/rsanchezp">
            {' '}
            Raul Sanchez{' '}
          </a> <br />
          🚧Working on <a href="http://www.tryAdora.com">tryAdora.com</a>
        </p>
      </div>
  }
}

export default Bio
