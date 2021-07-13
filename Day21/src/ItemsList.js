import './ItemsList.css';
import {useState, useEffect} from 'react';

const Item = (props) => {
    const item = props.item;
    const [isInEditMode, setIsInEditMode] = useState(false);
    const [itemName, setItemName] = useState("");
    const [calories, setCalories] = useState(0);

    useEffect(() => {
        setItemName(item.name);
        setCalories(item.calories);
    }, [])

    const itemChangeHandler = (event) => {
        setItemName(event.target.value);
    }

    const caloriesChangeHandler = (event) => {
        setCalories(event.target.value);
    }

    const handleEdit = () =>{
        setIsInEditMode(!isInEditMode);
    }

    const handleDone = () => {
        setIsInEditMode(!isInEditMode);
        props.updateItem(item.name, itemName, calories);
    }

    return (
        <div className="Item">
            {isInEditMode ? (
            <div className="input-header">
               <input type="text" name="item" placeholder="Item name" value={itemName} onChange={itemChangeHandler} required/>
                <input type="number" name="calories" placeholder="Calories" value={calories} onChange={caloriesChangeHandler} required/>
            </div>
            ) : (
                <div className="text-header">
                    <h5>{item.name}</h5>
                <p>{`You have consumed ${item.calories} calories`}</p>
                </div>
                )}
            <div className="actions">
                <button className="delete-button" onClick={()=>{props.deleteItem(item.name);}}>{'Delete'}</button>
                {isInEditMode ? <button className="done-button" onClick={handleDone}>{'Done'}</button> : <button className="edit-button" onClick={handleEdit}>{'Edit'}</button>}
            </div>
        </div>
    )
}

const ItemsList = (props) => {
    const items = props.items;

    return (
        <div className="ItemsList">
            {
                items.length !== 0 ? 
                items.map((item) => <Item key={item.name} item={item} updateItem={props.updateItem} deleteItem={props.deleteItem}/>)
                : 'Start adding items'
            }
        </div>
    )
}

export default ItemsList;