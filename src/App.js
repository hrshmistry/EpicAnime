import Pages from './pages/Pages';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Epic Anime</h1>
        <Pages />
      </Router>
    </div>
  );
}

export default App;
