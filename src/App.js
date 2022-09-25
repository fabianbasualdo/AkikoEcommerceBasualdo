import Home from "./pages/Home"
import { CartContextProvider } from "./context/cartContext";

const App = () => {


  return (
    /*envuelvo el componente con el contexto creado*/
    <CartContextProvider>
    <Home />
    </CartContextProvider>
  );
};

export default App;
