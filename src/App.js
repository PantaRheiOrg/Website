import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router basename='/pnta' >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;