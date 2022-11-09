import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import List from "./components/List";
import AddToList from './components/AddToList';

export interface IState{
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  // const [people, setPeople] = useState([
  //   {
  //     name: "Mez Eke",
  //     url: "",
  //     age: 20,
  //     note: "This is a note about me"
  //   },
  //   {
  //     name: "Krista Asoluka",
  //     url: "",
  //     age: 21,
  //   },
  // ])
  // const [people, setPeople] = useState<{}[]>([]) //define type of array of object
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Steph Curry",
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254",
      age: 34,
      note: "Sorry, can't miss 3 pointers",
    }
  ]) //define type of array of object. can be empty


  return (
    <div className="App">
      <h1>Invitees</h1>
     <List people={people}/>
     <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
