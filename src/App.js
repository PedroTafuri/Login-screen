import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      animationON: '',
      load: '',
    })
    this.animation = this.animation.bind(this);
    this.load = this.load.bind(this);
  }

  animation(){
   if(this.state.animationON === '') this.setState({animationON: ' animationON'})
   if(this.state.animationON === ' animationON') this.setState({animationON: ''})
  }

  load(){
    this.setState({load: 'load'})
   }
  

  render(){
    return(
      <div>
        <button id="active" onClick={this.animation}>Ativar</button>
        <div id="user-data" class={`animate${this.state.animationON}`}>
          <h1>Login</h1>
          <label>Nome
            <input type="text"/>
          </label>
          <label>Email
            <input type="text"/>
          </label>
          <button onClick={this.load}>Login</button>
          <div id={this.state.load}></div>
        </div>
      </div>
    )
  }
}

export default App;
