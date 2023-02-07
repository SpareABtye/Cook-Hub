import { useContext } from 'react'
import { ListContext } from '../../../contexts/item_list.context'

import Item from '../item/item'
import UserInput from '../../user-input/user-input.component'

import './item-list.style.scss'

const Itemlist = () => {

  const {listItems} = useContext(ListContext)

  return (
    <div className='item-list-frag'>
      <div className='item-list-container'>
        <div className='item-list-title'>
          <UserInput />
          <h3>Shopping List</h3>
        </div>
        <ul className='item-list'>
            {listItems.map((listItem) => {
              return (
                <li className='test' key={listItem.id}>
                  <Item item={listItem.listItem} id={listItem.id} />
                  </li>
              )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Itemlist