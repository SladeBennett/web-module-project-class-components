import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0
let getIdentification = () => ++id;

const initialTodos = [
  { id: getIdentification(), name: "Walk Suke Around Block", completed: true },
  { id: getIdentification(), name: "Do my laundry", completed: true },
  { id: getIdentification(), name: "Do the dishes", completed: false },
]

export default class App extends React.Component {
  state = {
    todos: initialTodos
  }

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: getIdentification(), completed: false, name })
    })
  }


  toggleCompletion = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if (id == td.id) return { ...td, completed: !td.completed }
        return td
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
        <Form addTodo={this.addTodo} />
      </div>
    )
  }
}
