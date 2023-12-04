import './App.css';
import './css/NavBar.css';
import './css/Home.css'
import './css/Footer.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
