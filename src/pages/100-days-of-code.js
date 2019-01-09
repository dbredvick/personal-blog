import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'

class OneHundredDaysOfCode extends React.Component {
  render() {
    return (
      <StaticQuery
        query={imageQuery}
        render={data => {
          const { author, social } = data.site.siteMetadata
          const posts = data.posts.edges
          console.log(data)
          return (
            <Layout location={this.props.location}>
              <SEO title="100 Days of Code" />
              <h1>100 Days of Code</h1>
              <p>
                New year, new me <i>right</i>? I'm going to use this blog to
                detail my attempt at completing the 100-days-of-code challenge.
                Below you will find updates from each day, as well as links to
                my progress tweets, Github updates, and any other fun things I
                find along the way. Over this 100 days, I want to come up with a
                solution that makes sharing a collaborative list of podcasts
                easier.
              </p>

              <h2>Summary</h2>
              <p>
                <b>The problem: </b>
                <a href="/sharing-is-caring/">Blog post - Sharing is Caring</a>
              </p>
              <p>
                <b>Github repo: </b>{' '}
                <a href="https://github.com/dbredvick/100-days-of-code">
                  https://github.com/dbredvick/100-days-of-code
                </a>
              </p>
              <p>
                <b>My Twitter: </b>{' '}
                <a href={`https://twitter.com/${social.twitter}`}>@dbredvick</a>
              </p>
              <h2>Daily Updates</h2>
              <div>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div key={node.fields.slug}>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <Link
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>
                  )
                })}
              </div>
            </Layout>
          )
        }}
      />
    )
  }
}

const imageQuery = graphql`
  query ImageQueryAndPosts {
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
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["100-days-of-code"] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

export default OneHundredDaysOfCode
