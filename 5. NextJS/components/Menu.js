import React from 'react'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <header className="menu">
    <div className="wrap">
      <a href="https://www.thetimes.co.uk/" className="menu__logo" />
      <nav className="menu__menubar">
        <ul role="menubar" className="menu__list">
          <li className="menu__item" role="menuitem">
            <Link href="/">
              <a title="home" className="menu__link">
                <div className="menu__home" />
              </a>
            </Link>
           </li>
        </ul>
      </nav>
    </div>
  </header>
)
