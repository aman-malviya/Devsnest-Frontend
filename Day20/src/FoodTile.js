import './FoodTile.css';

const FoodTile = (props) => {
    const food = props.food;
    return (
        <div className="FoodTile">
            <div className="Title">
                <h2>{food.name}</h2>
                <button onClick={()=>{
                    props.deleteHandler(food.name);
                }}>{'delete'}</button>
            </div>
            <p>{`you have consumed ${food.calorie} cals today`}</p>
        </div>
    )
}

export default FoodTile;