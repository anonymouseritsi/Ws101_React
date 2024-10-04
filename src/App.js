import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contacts/>
    </div>
  );
}

export default App;
