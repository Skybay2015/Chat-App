import React from 'react';
import 'normalize.css';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Pages/Main';

function App() {
   return (
      <div className='App'>
         <Header />
         <Main />
      </div>
   );
}

export default App;
