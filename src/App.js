import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserBlock from './Components/UserBlock';

const people = [
  {
    color: '#c0b112',
    firstName: 'Bruce',
    lastName: 'Banner'
  },
  {
    color: '#d42abe',
    firstName: 'Peter',
    lastName: 'Parker'
  },
  {
    color: '#47f394',
    firstName: 'Natasha',
    lastName: 'Roumanoff'
  },
  {
    color: '#db66ea',
    firstName: 'Carol',
    lastName: 'Danvers'
  },
  {
    color: '#14d990',
    firstName: 'Gwen',
    lastName: 'Stacey'
  }
]

const alphabet = [];

const App = () => {

  for(let i = 65; i < 91; i++)
  {
    alphabet.push(String.fromCharCode(i))
  }
  
  return (
    <div>
      {people.map((item, index) => (
        <UserBlock
          key={'person_' + index}
          color={item.color}
          firstName={item.firstName}
          lastName={item.lastName}
        />
      )
      )}
      {alphabet.map((letter, index) => {
        return (
          <span>{letter}</span>
        )
      })}
    </div>
  );
}

export default App;
