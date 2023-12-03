import { useState } from 'react'


// Importación estilos Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (

  <div style={{width: '100vw', height: '100vw'}}>
    <NavBarComponent />
    <ItemListContainer greeting= "Tu café favorito ahora también en tu casa"/>
  </div>

  );
}

export default App
