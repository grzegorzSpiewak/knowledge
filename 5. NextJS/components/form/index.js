import React from 'react';
import Router from 'next/router'
import moment from 'moment'

export default class SelectDateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      redirect: '/clippings'
    }
  }

  handleChange(e) {
    const date = this.state.date
    this.setState({
      date: e.target.value
    });
  }

  routerHandler(data) {
    Router.push({
      pathname: this.state.redirect,
      query: { name: data },
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    const queryParams = this.state.date
    const queryParamsNumber = Date.parse(queryParams)
    const currentTimeNumber = Date.parse(moment().format("YYYY/MM/DD"))

    /** Handle questions about the future **/
    if(queryParamsNumber > currentTimeNumber) {
       return Router.push('/future')
    }
    /** IF queryParams are ok push to clippings page **/
    queryParams? this.routerHandler(queryParams) : console.log('nie wybrales daty')
  }

  render() {
    return (
      <form className="form"
            id="subscribe"
            name="subscribe"
            onSubmit={ this.onFormSubmit.bind(this) }
            >
              <input
                type="date"
                placeholder="mm/dd/yyyy"
                className="form__date"
                required
                onChange={ this.handleChange.bind(this) }
              />
              <input
                type="submit"
                value="Search"
                name="submit_form"
                className="form__btn"
              />
      </form>
    );
  }
}
