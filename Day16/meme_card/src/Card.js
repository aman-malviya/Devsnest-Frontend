import './Card.css';

const Card = () => {
    const imageUrl = 'https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png';
    return (
        <div className='card'>
            <img src={imageUrl} className='meme child' alt='meme'/>
            <h1 className='meme child'>React Card</h1>
            <p className='meme child'>this is meme card</p>
        </div>
    );
}

export default Card;