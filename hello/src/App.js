import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Counter from './components/Counter';
import Todos from './components/Todo';
import Parent from './components/Uplifting/Parent';

function App() {
  return (
    <div className="App">
       <Home/>
       <Counter/>
       <Todos/>
       <Parent/>
    </div>
  );
}

export default App;
