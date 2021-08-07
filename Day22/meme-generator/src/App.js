import "./App.css";
import Memes from "./components/Memes";

function App() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="m-auto mt-3 mb-4">Meme Generator</h1>
      <div>
        <Memes />
      </div>
    </div>
  );
}

export default App;
