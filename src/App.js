import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
