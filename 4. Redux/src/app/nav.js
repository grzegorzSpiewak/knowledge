import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout, fetchTasks } from './actions'

class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  handleLogin(userId, apiToken) {
    const { dispatch} = this.props

    dispatch(login(userId, apiToken))

    dispatch(fetchTasks())
  }

  render() {
    const { loggedIn, dispatch } = this.props

    let apiToken, userId

    let displayAuthentication = () => {
      return loggedIn? (<h1>you are logged in</h1>) : (
        <form>
          <input type="text" ref = { node => userId = node } placeholder="userId"/>
          <input type="text" ref = { node => apiToken = node } placeholder="apiToken"/>
          <a onClick={ () => this.handleLogin(userId.value, apiToken.value) }>
            login
          </a>
        </form>
      )
    }

    let displayLogout = () => {
      return loggedIn? (
        <div>
          <a onClick={ () => dispatch(logout()) }>
            logout
          </a>
        </div>
      ) : (<div></div>)
    }

    return (
      <div>
       { displayAuthentication() }
       { displayLogout() }
      </div>
    )
  }
}

function select(state) {
  let loggedIn = false

  if(state.authentication && state.authentication.apiToken.length > 0 && state.authentication.apiToken.length > 0) {
    loggedIn = true
  }
  return {
    loggedIn
  }
}

export default connect (select)(Navigation)
