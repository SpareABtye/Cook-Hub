import { useContext } from 'react'
import { ListContext } from '../../../contexts/item_list.context'

import Item from '../item/item'
import UserInput from '../../user-input/user-input.component'

import './item-list.style.scss'

const Itemlist = () => {

  const {listItems} = useContext(ListContext)

  return (
    <div className='item_list_container'>
    
      <ul className='item_list'>
        <UserInput />
        <h3>Shopping List</h3>
          {listItems.map((listItem) => {
            return (
              <li className='test' key={listItem.id}>
                <Item item={listItem.listItem} id={listItem.id} />
                </li>
            )
          })}
        </ul>
    </div>
  )
}

export default Itemlist