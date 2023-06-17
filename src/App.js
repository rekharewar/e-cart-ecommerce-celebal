import './App.css';
import{Switch ,Route, Routes} from 'react-router-dom';
import Product from './Components/Product';
import Products from './Components/Products';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';

function App() {
  return (
    <>
    <Navbar/>
    <switch>
    {/* <Home/> */}
      <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/Products' Component={Products}/>
      <Route exact path='/Products/:id' Component={Product}/>
      <Route exact path='/cart' Component={Cart}/>
      </Routes>
    </switch>
    </>
  );
}

export default App;
