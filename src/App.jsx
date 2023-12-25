import { useState } from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './App.css';

function App() {
    return (
    <>
      <div className='App'>
        <ItemListContainer greeting={'Bienvenido al E-Commerce'}/>
        <NavBar/>
      </div>      
    </>
  )
}

export default App
