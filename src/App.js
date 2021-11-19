import './App.css';
import Home from './components/Home.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchResult from './components/SearchResults.js'



function App() {
  return <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResult />} />
      </Routes>
    </div>
  </Router>

  
}

export default App;
