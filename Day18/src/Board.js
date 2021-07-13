import "./Board.css";

const Board = () => {
  const squares = [];
  const colors1 = ["#000", "#FFF"];
  const colors2 = ["#FFF", "#000"];
  let whiteFirst = true;
  for (let i = 0; i < 64; i++) {
    if (
      i === 0 ||
      i === 8 ||
      i === 16 ||
      i === 24 ||
      i === 32 ||
      i === 40 ||
      i === 48 ||
      i === 56 ||
      i === 64
    )
      whiteFirst = !whiteFirst;
    squares.push(
      <div
        className="square"
        style={{
          backgroundColor: whiteFirst ? colors2[i % 2] : colors1[i % 2],
        }}
      />
    );
  }
  return <div className="board">{squares}</div>;
};

export default Board;
