import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'

class About extends React.Component {
  render() {
    console.log('hello')

    return (
      <StaticQuery
        query={ImgQuery}
        render={data => {
          const { author, social } = data.site.siteMetadata
          return (
            <Layout location={this.props.location}>
              <SEO title="About Drew Bredvick" />
              <h1>Hey, I'm Drew.</h1>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  width: '85%',
                  display: 'inline-block',
                }}
              >
                I write full-stack JavaScript applications for{' '}
                <a href="https://www.spreetail.com">Spreetail</a>. I love
                solving consumers' problems and building e-commerce solutions.
              </span>
              <h3>A little about me</h3>
              <p>
                I grew up in a small town in Western Nebraska. I got hooked on
                electronics at a young age when my dad and I assembled a
                computer together when I was in fourth grade. My tech love
                started with video games: first playing them, then trying to
                hack them, and finally trying to build them. Fourteen years
                later, I still play video games in my spare time. I found a
                career in something similar - solving puzzles on the computer.
                In the day you can find me at your local coffee shop checking
                r/all on Reddit. I spend my nights checking out the latest
                JavaScript news and throwing together a new "Hello, World!"
                application with the latest tech.
              </p>
              <h3>Tech I'm interested in</h3>
              <ul>
                <li>
                  <a href="https://reactjs.org/">React</a>
                </li>
                <li>
                  <a href="https://nodejs.org/en/">Node.js</a> and{' '}
                  <a href="https://expressjs.com/">Express</a>
                </li>
                <li>
                  <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
                </li>
                <li>
                  <a href="https://sailsjs.com/">Sails.js</a>
                </li>
              </ul>
              <h3>Experience</h3>
              I'll fill this section out soon, but in the meantime please check
              out my{' '}
              <a href="https://www.linkedin.com/in/drew-bredvick/">LinkedIn</a>.
              <h3>Need to get ahold of me?</h3>
              <p>
                Send me a message on{' '}
                <a href="https://www.linkedin.com/in/drew-bredvick/">
                  LinkedIn
                </a>{' '}
                or message me on{' '}
                <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>.
              </p>
            </Layout>
          )
        }}
      />
    )
  }
}

const ImgQuery = graphql`
  query ImgQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default About
