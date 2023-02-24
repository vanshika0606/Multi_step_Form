
import { useState } from 'react';
import './App.css';
import Form from './Form';
import Example from './sideBar.js'

function App() {
  

  return (
    <div className='md:flex m-2 border border-slate-500 rounded-xl'>
      <Example/>
      <Form/>
    </div>
  );
}

export default App;
