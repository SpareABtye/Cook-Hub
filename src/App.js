import { useState } from 'react';

import Itemlist from './components/item-list/item-list'
import './App.css';

const App = () => {

  // Userinput is fed into the input box. 
  // SavedList is the actual list stored in an array.
  const [userInput, setUserInput] = useState('');
  const [savedList, setSavedList] = useState([]);

  // This handle takes the input (>0), adds it to the list array and clears the input.
  const handleClick = (event) => {
    if(userInput.length > 0){
      setSavedList(savedList.concat(userInput));
      setUserInput('');
      console.log(savedList);
  }
  }
  
  return (
    <div>
      <div>
        <input value={userInput} onChange={e => setUserInput(e.target.value)} />
        <button onClick={handleClick}>Add</button>
      </div>
      <Itemlist listItems={savedList}/>
    </div>
  );
}

export default App;
