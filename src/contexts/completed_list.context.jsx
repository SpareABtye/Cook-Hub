import { createContext, useState } from "react";

export const CompletedListContext = createContext({
    completedList: [],
    deleteItem: () => {},
    returnItem: () => {}
});

export const CompletedListProvider = ({children}) => {

    const deleteItem = (id) => {
        console.log(completedList)
        setCompletedList((listItems) => listItems.filter((items) => items.id !== id));
    };

    const [completedList, setCompletedList] = useState([]);

    const value = {
        completedList,
        setCompletedList,
        deleteItem
    }

    return (
        <CompletedListContext.Provider value={value}>
            {children}
        </CompletedListContext.Provider>
    )
};