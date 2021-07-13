import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <p>There are 4 counter component instances that each manage their own state.</p>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
