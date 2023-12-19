import "./App.css";
import {Routes,Route} from 'react-router-dom';
import DataEntry from "./data-entry/DataEntry";

function App() {
  return (
    <Routes>
      <Route path='/dataentry' element={<DataEntry />}></Route>
    </Routes>
  )
}

export default App;
