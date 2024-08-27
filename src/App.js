import Navigation from './Components/Constants/Navigation';
import './Styles/Book.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Constants/Footer';
import Homepage from './Pages/Homepage';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
