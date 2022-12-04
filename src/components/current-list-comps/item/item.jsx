/* eslint-disable jsx-a11y/img-redundant-alt */
import { useContext } from 'react';

import { ListContext } from '../../../contexts/item_list.context';

import './item.style.scss'

const Item = ({item, id}) => {

  const {moveItem} = useContext(ListContext)

  return(
      <div className='list_item_container'>
        <div onClick={() => moveItem(id, item)} className='list_item'>
          {item}
        </div>
      </div>
  )
}

export default Item