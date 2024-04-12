import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import { userData } from './Data/userdata';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './components/Home';
import PokemonList from './components/PokemonList';
import ItemList from './components/ItemList';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);


  const handleLogin = (username, password) => {
    const user = userData.find(user => user.username === username && user.password === password);
    if (user) {
      setLoggedInUser(user);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <BrowserRouter>
      <div className="App">

      {loggedInUser ? (
          <Routes>
            <Route path="/" element={<Home user={loggedInUser} />} />
            <Route path="/pokilist" element={<PokemonList user={loggedInUser} />} />
            <Route path="/itemlist" element={<ItemList user={loggedInUser} />} />
          </Routes>
        ) : (
          <Login handleLogin={handleLogin} />
        )}

      </div>
    </BrowserRouter>
  );
}

export default App;
