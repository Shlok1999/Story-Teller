import Navigation from './Components/Constants/Navigation';
import './Styles/Book.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Constants/Footer';
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Bookstore from './Pages/Bookstore';
import Library from './Pages/Library';
import Blog from './Pages/Blog';
import Create from './Pages/Create';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/bookstore' element={<Bookstore/>}/>
          <Route exact path='/library' element={<Library/>}/>
          <Route exact path='/blogs' element={<Blog/>}/>
          <Route exact path='/author' element={<Create/>}/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
