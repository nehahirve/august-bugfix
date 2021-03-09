import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import placeholderImage from "../images/placehold.jpg"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />

        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

      <ol className="articlesList">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Link to={post.fields.slug} itemProp="url" className="articleLink">
              <li key={post.fields.slug} className="articles">
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <img
                    src={post.frontmatter.featuredImage}
                    alt="placeholder"
                    className="articleImage"
                  />
                  <header className="articleHeader">
                    <h2 className="articleH2">
                      <span itemProp="headline">{title}</span>
                    </h2>

                    <small className="articleDate">
                      {post.frontmatter.date}
                    </small>
                  </header>

                  <section className="articleText">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            </Link>
          )
        })}
      </ol>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
