import { useState, useContext } from 'react';

import { ListContext } from '../../contexts/item_list.context';

import './user-input.styles.scss'

const UserInput = () => {

  const { addItem } = useContext(ListContext);
  const [userInput, setUserInput] = useState('');

  const handleClick = () => {
    if(userInput.length > 0){
      addItem(userInput)
      setUserInput('');
  }}

  const handleKeypress = (e) => {
    if(e.key === 'Enter'){
      handleClick();
  }}

  return (
      <div className='user_input_container' >

          <input 
          className='input_box' 
          value={userInput} 
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeypress}
           />

          <button 
          className='add_button' 
          onClick={handleClick}>
          Add</button>
          
      </div>
  )
}

export default UserInput;