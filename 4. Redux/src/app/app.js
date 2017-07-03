// 1 Step import all elements needed to create this component
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTasks, completeTask } from './actions';
import TaskList from './taskList';
import Navigation from './nav';

// 2 Step crate react component
// Sometimes you can keep some components in their own state seprating from main state
// Rule of thumb if you need to passs props between diffrent containers or pages use Redux
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchTasks());
  }

  handleCompleteTask(task) {
    const { dispatch } = this.props;

    dispatch(completeTask(task.id));
  }


  render () {
    // 4 step addings selected state elements to props
    // need to use connect always use dispatch
    const { dispatch, habits, dailies, todos } = this.props;

    return (
      <div className="container">
        <Navigation />
        <section>
          <h3>Habits</h3>
          <TaskList
            // adding
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={habits} type="habit" />
        </section>
        <section>
          <h3>Dailies</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={dailies} type="daily" />
        </section>
        <section>
          <h3>Todos</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={todos} type="todo" />
        </section>
      </div>
    )
  }
}

// 3 step after creating react container
// Add state
function select(state) {
  return {
    habits: state.tasks.filter(task => task.type === 'habit'),
    dailies: state.tasks.filter(task => task.type === 'daily'),
    todos: state.tasks.filter(task => task.type === 'todo')
  };
}

//4 step use connect to rect with state
export default connect(select)(App);
