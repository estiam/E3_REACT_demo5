import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserBlock from './Components/UserBlock';

const demoPeople = [
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

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const App = () => {
  // const [toto, setToto] = useState();
  const [inputValue, setInputValue] = useState('');
  const [people, setPeople] = useState([]);

  const handleAdd = () => {
    if(inputValue.split(' ')[1] == null) {
      alert("Nom incorrect");
      return;
    }
    const newPerson = {
      color: getRandomColor(),
      firstName: inputValue.split(' ')[0],
      lastName: inputValue.split(' ')[1],
    };
    
    setPeople([...people, newPerson]);

    // équivalent à la ligne 60 :
    // const newArray = new Array(people);
    // newArray.push(newPerson);
    // setPeople(newArray);
  }

  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          type='text'
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {people.map((item, index) => (
        <UserBlock
          key={'person_' + index}
          color={item.color}
          firstName={item.firstName}
          lastName={item.lastName}
        />
      )
      )}
    </div>
  );
}

export default App;
