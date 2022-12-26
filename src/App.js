import { Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage';
import Layot from './components/Layot';
import AboutUs from './components/HomePage/About/AboutUs';
import Shop from './components/Shop/Shop';
import Admin from './components/Admin';
import NewsGet from './components/News/AllNews/NewsGet';
import NewsFull from './components/News/FullNews';
import NewsForm from './components/News/NewsForm';

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
        </Route>
      </Routes>
    </div>
  );
}


export default App;
