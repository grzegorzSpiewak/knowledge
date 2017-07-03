import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Informations from '../components/Informations'

export default class extends React.Component {
  static async getInitialProps ({ query }) {
    const pageQuery = query.name.split('-')
    const year = parseInt(pageQuery[0])
    const month = parseInt(pageQuery[1])
    const key = 'fe5bb8d0f8f74010990a4b27e62e54d3'
    const link = `http://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${key}`
    const res = await fetch(link)
    const data = await res.json()
    return { data }
  }

  render () {
    const clippings = this.props.data.response
    return (
      <div>
        <Menu />
        <Informations {...clippings} />
        <Footer />
      </div>
    )
  }
}
