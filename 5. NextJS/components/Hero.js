'use strict';
import React from 'react'
import Form from './form/index'

const Hero = (props) => (
  <section className="hero">
    <div className="wrap">
      <div className="hero__overlay">
        <h1 className="hero__title">
          Select any date since January 1851...
        </h1>
        <div className="hero__action">
          <Form />
          <p className="hero__caption">
          ... and find Times articles about that period.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
