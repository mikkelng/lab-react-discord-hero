import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Primary from "./components/primary/Primary.jsx"; 
import Background from './components/background/Background.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <Primary />
    </div>
  );
}

export default App;
