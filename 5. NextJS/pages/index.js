'use strict'
import React from 'react'
import Form from '../components/form'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Hero from '../components/Hero'


export default class extends React.Component {

  render () {
    return (
      <div>
        <Menu />
        <Hero />
        <Footer />
      </div>
    )
  }
}
