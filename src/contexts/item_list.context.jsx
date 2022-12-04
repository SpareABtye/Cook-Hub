import { createContext, useState, useContext } from "react";

import { CompletedListContext } from "./completed_list.context";

import { v1 as uuidv1 } from 'uuid';

export const ListContext = createContext({
    listItems: [],
    moveItem: () => {}
});

export const ListProvider = ({children}) => {

    const { completedList, setCompletedList } = useContext(CompletedListContext)

    const initialState = [
        {id: uuidv1(), listItem: 'milk'},
        {id: uuidv1(), listItem: 'eggs'},
        {id: uuidv1(), listItem: 'bread'},
        {id: uuidv1(), listItem: 'flour'},
        {id: uuidv1(), listItem: 'sugar'},
    ];

    const moveItem = (id, item) => {
        console.log(completedList)
        setCompletedList([...completedList, {id: id, listItem: item}])
        setListItems((listItems) => listItems.filter((items) => items.id !== id)) 
    };

    const returnItem = (id, item) => {
        console.log(completedList)
        setListItems([...listItems, {id: id, listItem: item}])
        setCompletedList((completedList) => completedList.filter((compItems) => compItems.id !== id)) 
    };

    const addItem = (userInput) => {
        setListItems([...listItems,{id: uuidv1(), listItem: userInput}]);
    };

    const [listItems, setListItems] = useState(initialState);

    const value = {
        listItems,
        setListItems,
        moveItem,
        returnItem,
        addItem
    }

    return (
        <ListContext.Provider value={value}>
            {children}
        </ListContext.Provider>
    )
};