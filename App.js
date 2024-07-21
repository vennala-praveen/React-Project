// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import {Routes,Route,Link} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>
        <li><Link to="/about" style={{textDecoration:'none'}}>About</Link></li>
        <li><Link to="/products" style={{textDecoration:'none'}}>Products</Link></li>
      </ul>
      <hr />
      <Routes>
      <Route path="/">  
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}>
          <Route path=":id" element={<ProductDetail/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
