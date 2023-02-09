import logo from './logo.svg';
import './App.css';
import Coin from './Components/Coin';
import Accordion from './Components/Accordion';
import CoinComponentAfterEdit from './Components/CoinComponentAfterEdit';

function App() {
  return (
    <div className="App">
      <Coin/>
      <br/>
      <br/>
      <Accordion/>
      <br/>
      <br/>
      <CoinComponentAfterEdit/>
    </div>
  );
}

export default App;
