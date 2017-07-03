'use strict';
import React from 'react'
import Form from './form/index'

const Future = (props) => (
  <section className="hero">
    <div className="wrap">
      <div className="hero__overlay">
        <h1 className="hero__title">
          Unfortunately times does not know a future...
        </h1>
        <div className="hero__action">
          <Form />
          <p className="hero__caption">
          ... choose date from past.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Future
