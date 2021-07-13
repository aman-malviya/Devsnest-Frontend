import './Board.css';

const Board = () => {
    const rows = [];
    const colors1 = ["#000", "#FFF"];
    const colors2 = ["#FFF", "#000"];
    let whiteFirst = true;
    for(let i = 0; i < 8; i++){
        const squares = [];
        whiteFirst = !whiteFirst;
        for(let j = 0; j < 8; j++){
            squares.push(<div className="square" style={
                {
                    backgroundColor: whiteFirst ? colors2[j%2] : colors1[j%2]
                }
            }/>);
        }
        rows.push(<div className="row">{squares}</div>);
    }

    return (
        <div className="board">
            {
                rows
            }
        </div>
    );
}

export default Board;