import './App.css';
import { Component } from 'react';

class App extends Component 
{
  state = [
    {
      name: "Yoimiya",
      weapon: "Bow",
      element: "Pyro"
    },
    {
      name: "Eula",
      weapon: "Claymore",
      element: "Cryo"
    },
    {
      name: "Yae Miko",
      weapon: "Catalyst",
      element: "Electro"
    },
    {
      name: "Raiden Shogun",
      weapon: "Polearm",
      element: "Electro"
    }
  ];

  render() 
  {
    return(
    <div>
    { this.state.map((playerInfo) => {
      return <h1>{playerInfo.name} is a {playerInfo.element} {playerInfo.weapon} user.</h1>
    }) 
    }
    </div>)
  };
}

export default App;
