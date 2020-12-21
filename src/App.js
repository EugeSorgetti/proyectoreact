import React from 'react';
import Navbar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

import './App.css';

function App() {
  return (
    <div>
      <header className="header">
          <Navbar/>
          <CartWidget/>
      </header>
      <ItemListContainer titulo="Bienvenidos a Weig Alfajores"/>
      <ItemCount/>
    </div>
  );
}

export default App;
