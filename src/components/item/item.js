import './item.style.css'

import { useState } from 'react';

const Item = ({item}) => {

    const [isChecked, setIsChecked] = useState(false);

  
    const striker = (event) => {
        setIsChecked(event => !event);
      }

    return(
        <div className='list-item-container'>
          <div onClick={striker} className={isChecked ? 'list-item strike' : 'list-item'}>
          {item}
          </div>
          <button>d</button>
        </div>
    )
}

export default Item