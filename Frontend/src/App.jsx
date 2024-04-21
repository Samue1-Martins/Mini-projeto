import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Main />
      </div>
    </div>
  )
}

export default App;
