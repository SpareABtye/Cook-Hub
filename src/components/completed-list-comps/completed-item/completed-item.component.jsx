import { useContext } from 'react';

import { CompletedListContext } from '../../../contexts/completed_list.context';
import { ListContext } from '../../../contexts/item_list.context';

import './completed-item.styles.scss'

const CompletedItem = ({item, id}) => {

  const { deleteItem } = useContext(CompletedListContext)
  const { returnItem } = useContext(ListContext);

  return(
      <div className='completed_list_item_container'>

        <div className='completed_list_item strike'>
          {item}

        <button className='delete_item_button' onClick={() => returnItem(id, item)}>
          <img src={require('../../../assets/undo_image.png')} alt='Delete' />
        </button>

        <button className='delete_item_button' onClick={() => deleteItem(id)}>
          <img src={require('../../../assets/delete_image.png')} alt='Delete' />
        </button>
        </div>

    </div>
  )
}

export default CompletedItem

// onClick={() => moveItem(id, item)}