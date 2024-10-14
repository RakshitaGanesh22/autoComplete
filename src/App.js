import './App.css';
import {ContextProvider} from "./components/dataProvider";
import AutoComplete from './components/autoreader';
function App() {
  return (
    <ContextProvider>
    <div className="App">
      <AutoComplete/>
    </div>
    </ContextProvider>
  );
}

export default App;
