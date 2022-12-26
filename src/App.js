import { Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import Layot from './components/Layot';
import AboutUs from './components/HomePage/About/AboutUs';

import Shop from './components/Shop/Shop';
import Admin from './components/Admin';
import NewsGet from './components/news/AllNews/NewsGet';
import NewsFull from './components/news/FullNews';
import NewsForm from './components/news/NewsForm';
import Cart from './components/Shop/Cart/Cart';
import Product from './components/Shop/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layot/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/news' element={<NewsGet/>}/>
          <Route path='/news/:id' element={<NewsFull/>}/>
          <Route path='/news-form/' element={<NewsForm/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path="/cart" element = {<Cart/>} />
          <Route path="/product/:id" element = {<Product/>} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
