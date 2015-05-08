import React from 'react/addons';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items: [{text: 'foo bar', id: 1}]
    };
  }

  handleChange(items){
    this.setState({items: items});
  }

  render() {
    return (
      <div>
        <TodoList value={this.state.items} onChange={this.handleChange.bind(this)} />
        <pre>{JSON.stringify(this.state, null, 4)}</pre>
      </div>
    );
  }
}