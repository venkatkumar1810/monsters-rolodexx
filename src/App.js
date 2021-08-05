// import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
// import { string } from 'yargs';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
      // String : 'Hello Venkat'
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) =>{
    this.setState({ searchField: e.target.value});
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

  }
  render() {
    const { monsters, searchField } = this.state;
    // ^ this equivalent to saying 
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder='Search Monsters..' 
         handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
      
    );
  }
}

export default App;
