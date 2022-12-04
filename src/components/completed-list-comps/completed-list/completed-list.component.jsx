import { useContext } from 'react';
import { CompletedListContext } from '../../../contexts/completed_list.context';

import CompletedItem from '../completed-item/completed-item.component';

import './completed-list.styles.scss'

const CompletedList = () => {

    const { completedList } = useContext(CompletedListContext)
 
    if (completedList.length > 0) {return (
        <div className='completed_list_container'>
          <ul className='completed_item_list'>
            {completedList.map((compListItem) => {
              return (
                <li className='test' key={compListItem.id}>
                  <CompletedItem item={compListItem.listItem} id={compListItem.id} />
                  </li>
              )
            })}
          </ul>
        </div>
    )}
}

export default CompletedList;