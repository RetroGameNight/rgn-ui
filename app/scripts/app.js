const React = window.React = require('react'),
    Timer = require("./ui/Timer.js"),
    mountNode = document.getElementById("app")

require("../styles/main.scss")    

class TodoList extends React.Component {
  render() {
    let createItem = itemText => { return <li>{itemText}</li> }
    return <ul>{this.props.items.map(createItem)}</ul>
  }
}
class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {items: [], text: ''}
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onChange(e) {
    this.setState({text: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
    let nextItems = this.state.items.concat([this.state.text])
    let nextText = ''
    this.setState({items: nextItems, text: nextText})
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
          <Timer />
        </form>
      </div>
    );
  }
}


React.render(<TodoApp />, mountNode);

