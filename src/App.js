import './App.css';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      hello world
      <div>
        <Button name={'first'}><span>First Button</span></Button>
        <Button name={'second'}></Button>
        <Button name="third"></Button>
        <Button color= {'red'} name='four'></Button>
        <Button></Button>


      </div>
    </div>
  );
}

export default App;
