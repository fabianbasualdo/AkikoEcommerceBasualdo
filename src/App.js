
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nabvar from './componentes/Nabvar';
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  return (
    <div className="App" >
     
 
      <Nabvar/>
      <ItemListContainer props={3}/>
      
  
    </div>
  );
}

export default App;
