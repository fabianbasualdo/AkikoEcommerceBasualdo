
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nabvar from './componentes/Nabvar.js';
import ItemListContainer from './componentes/ItemListContainer.js';

function App() {
  return (
    <div className="App" >
     
 
      <Nabvar/>
      <ItemListContainer props={3}/>
  
    </div>
  );
}

export default App;
