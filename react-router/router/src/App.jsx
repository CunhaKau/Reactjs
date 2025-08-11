import './App.css';

import { Outlet } from 'react-router-dom';

//Link de navegação entre páginas
import Navbar from './components/Navbar';

//Search Form
import SearchForm from './components/SearchForm';

function App() {

  return (
    
      <div className="App">
        <Navbar />
        <SearchForm />
        <Outlet />
        <p>Footer</p>
        
      </div>
     
  )
}

export default App;
