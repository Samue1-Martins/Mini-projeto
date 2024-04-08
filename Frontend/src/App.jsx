import Navbar from './components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import { Main } from './components/Main.jsx';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Outlet />
        <Main />
      </div>
    </div>

  )
}

export default App;
