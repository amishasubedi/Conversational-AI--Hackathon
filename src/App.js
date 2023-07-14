import './App.css';
import Header from './components/header/header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about-us" element = {<Aboutus />} />
        <Route path = "/chatbot" element = {<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
