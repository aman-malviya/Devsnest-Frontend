import './Container.css';

const Container = (props) =>{
    const food = props.food;
    return (
        <div className="Container">
            <h1>{food.name}</h1>
            <h4>{`you have consumed ${food.calorie} cals today`}</h4>
        </div>
    );
}

export default Container;