import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[
      ],
      string: "Helloo initial"
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( {monsters:users} ))
  }

  render(){
    return (
      <div className="App">
 {
   this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
 }
      </div>
    );
  }
}
function AppRemoved() {
  
  
}

export default App;
