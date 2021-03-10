import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Articles from "../components/articles"
/* import SEO from "../components/seo" */

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  // console.log(posts)
  return (
    <Layout location={location} title={siteTitle}>
      {posts.map(post => {
        console.log(post.frontmatter)
        console.log(post.frontmatter.helloImage)
        return (
          <>
            <p>{post.frontmatter.title}</p>
            <Img
              fluid={post.frontmatter.helloImage.childImageSharp.fluid}
              alt="A corgi smiling happily"
            />
          </>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          helloImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
