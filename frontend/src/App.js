import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    
  );
}

export default App;
