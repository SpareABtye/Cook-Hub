import { useState } from 'react';

import Item from '../item/item'
import './item-list.style.css'

const Itemlist = ({listItems}) => { 

    return (
        <ul>
          {listItems.map((item, i) => {
            return (
              <li key={i}>
                <Item item={item} />
                </li>
            )
          })}
        </ul>
    )
}

export default Itemlist