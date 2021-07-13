import './CreateItem.css';
import {useState} from 'react';

const CreateItem = (props) => {
    const [itemName, setItemName] = useState("");
    const [calories, setCalories] = useState(0);

    const itemChangeHandler = (event) => {
        setItemName(event.target.value);
    }

    const caloriesChangeHandler = (event) => {
        setCalories(event.target.value);
    }

    return (
        <form className="CreateItem">
            <div className="inputs">
                <input type="text" name="item" placeholder="Item name" value={itemName} onChange={itemChangeHandler} required/>
                <input type="number" name="calories" placeholder="Calories" value={calories} onChange={caloriesChangeHandler} required/>
            </div>
            <button onClick={(event) => {
                event.preventDefault();
                props.addItem(itemName, calories);
                }}>{'Add Item'}</button>
        </form>
    )
}

export default CreateItem;