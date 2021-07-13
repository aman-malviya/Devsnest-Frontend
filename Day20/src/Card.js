import './Card.css';
import FoodTile from './FoodTile';
import {useState} from 'react';

const Card = () => {
    const [foods, setFoods] = useState([{name:'Pizza', calorie:13 },{name:'Burger', calorie:34 },{name:'Coke', calorie:234 },{name:'Browne', calorie:34 },{name:'Fried Rice', calorie:43 },{name:'Lassania', calorie:43 },{name:'Pani Puri', calorie:42 }]);
    
    const deleteItem = (key) => {
        setFoods(foods.filter((food) => {
            return food.name !== key;
        }));
    }
    
    return (
        <div className="Card">
            {
                foods.length !== 0 ? foods.map((food) => { 
                    return (<FoodTile deleteHandler={deleteItem} key={food.name} food={food}/>);
                }) : <h2 style={{marginTop:"0.5em"}}>{'No entry'}</h2>
            }
        </div>
    );
}

export default Card;