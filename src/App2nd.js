import { Component } from 'react';

class App2nd extends Component
{
    state = {
        name: "Yoimiya",
        weapon: "Bow",
        element: "Pyro"
    }

    switchCharacter = () => {
        if (this.state.name == 'Yoimiya')
        {
            this.setState(
                {
                    name: 'Amber'
                })
        }
        else 
        {
            this.setState(
                {
                    name: 'Yoimiya'
                })
        }
    }

    render()
    {
        return(
        <div>
            <h1>{this.state.name}  is a {this.state.element} {this.state.weapon} user.</h1>
            <button onClick={this.switchCharacter}>Switch character</button>
        </div>) 
    }
}

export default App2nd;