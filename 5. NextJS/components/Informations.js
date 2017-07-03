'use strict';
import React from 'react'
import Form from './form/index'
import Link from 'next/link'


const renderClippings = (items) => {
  return items.map((item, i) =>
    <div className="informations__list" key={ i } >
      <article className="informations__clippings">
        <h1 className="informations__header" dangerouslySetInnerHTML={ {__html: item.headline.main} } />
        <p className="informations__lead">
          { item.lead_paragraph? item.lead_paragraph : 'Full article is not available here' }
        </p>
        <p className="informations__date">
         Published on { item.pub_date.split('T')[0] }
        </p>
        <Link href={ `${item.web_url}` }>
          <a title="link-to-article" className="informations__link" target="_blank">
            Find more
          </a>
        </Link>
      </article>
    </div>
  )
}

const Informations = (props) => (
  <section className="informations">
    <div className="wrap">
      <div className="informations__wrap">
        { renderClippings(props.docs) }
      </div>
    </div>
  </section>
)

export default Informations
