
import React from 'react';
import './App.css';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';

function App() {
  return (
    <div>
      <h2>Ejercicios React Básicos</h2>
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
}

export default App;
