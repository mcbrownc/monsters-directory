import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '23124hiuhi'
        },
        {
          name: 'Frank',
          id: 'sdsad897asd'
        },
        {
          name: 'Jacky',
          id: 'hjihdsa87ds6'
        },
        {
          name: 'Andre',
          id: 'uhadfuihdfi744'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
            <div key={monster.id}>
              <h1 >{monster.name}</h1>
            </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
