import React from 'react';
import Navbar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
          <Navbar/>
          <CartWidget/>
      </header>
      <ItemListContainer titulo="Bienvenidos a Griddle Burgers"/>
    </div>
  );
}

export default App;
