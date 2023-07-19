import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import {Login} from './auth/Login';
import {Logout} from './auth/Logout';
import { Link, Route,Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';

function App() {
  const {isAuthenticated} =useAuth0();
  return (
    <div className="App-d-flex justify-content-center" role="group" aria-label="Basic example">
      <header className="App-header">
         {isAuthenticated ? (
          <>
          <nav class="navbar bg-body-tertiary border">
          <Link to='/Favorites'><h5>Favoritos</h5></Link>
          <Link to='/home'><h5>Home</h5></Link>
          <Link to='/logout'><h5>Logout</h5></Link>
          </nav>
          </>
         ): (
          <Login/>
         )}  
      </header>

      <Routes>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </div>
  );
}

export default App;