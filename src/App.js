import React, {Component} from 'react';
import './App.css';
import Formulaire from "./Formulaire";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      globalTitle: ""
    }
  }

  onChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      globalTitle: `Mon formulaire - ${this.state.title}`
    })
  } 

  componentDidMount() {
    console.log("Formulaire rendu")
  }

  componentDidUpdate() {
    console.log("Titre changé")
  }

  render() {
    return (
      <div className="App">
        <Formulaire
          globalTitle = {this.state.globalTitle}
          title = {this.state.title}
          onSubmit = {this.onSubmit}
          onChange ={this.onChange} 
        />
    </div>
  )}
}

export default App;
