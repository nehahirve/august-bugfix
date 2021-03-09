import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="global-header">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="global-header">
        <Link to="/">{title}</Link>
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>

      <div className="buttonContainer">
        <button className="buttons">Into The Nature</button>
        <button className="buttons">Sustainability Knowledge</button>
        <button className="buttons">Sustainability Lifestyle</button>
      </div>

      <main>{children}</main>

      <footer></footer>
    </div>
  )
}

export default Layout
