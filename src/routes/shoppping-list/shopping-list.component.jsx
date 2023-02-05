import CompletedList from "../../components/completed-list-comps/completed-list/completed-list.component";
import Itemlist from "../../components/current-list-comps/item-list/item-list";

import './shopping-list.styles.scss'

const ShoppingList = () => {
    return (
        <div className="shopping-list">
            <div>
                <Itemlist />
            </div>
            <div>
                <CompletedList />
            </div>
        </div>
    )
};

export default ShoppingList;