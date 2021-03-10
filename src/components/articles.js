import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Articles = ({ posts }) => {

    return (
        <ol className="articlesList">
            {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                const image = getImage(post.frontmatter.featuredImage)
                return (
                    <Link to={post.fields.slug} key={post.fields.slug} itemProp="url" className="articleLink">
                        <li className="articles">
                            <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <GatsbyImage image={image} alt="AAAAA" />
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
    )
}

export default Articles

