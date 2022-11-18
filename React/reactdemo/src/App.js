import './App.css';
import Demo from './demo';
import Counter from './components/Counter.js'
import CounterFunc from './components/CounterFunc';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Counter/>
      </div>
      <CounterFunc/>
    </div>
  );
}

export default App;
