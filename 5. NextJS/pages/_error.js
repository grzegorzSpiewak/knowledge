import React from 'react'
import Link from 'next/link'

export default class Error extends React.Component {
  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  render () {
    return (
      <div>
        <p>{ this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : 'An error occurred on client' }</p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </div>
    )
  }
}
