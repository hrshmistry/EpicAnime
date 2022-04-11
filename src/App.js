import './index.css'
import Pages from './pages/Pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="mx1000-auto">
          <Pages />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
