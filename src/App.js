import React from 'react'
import './App.module.css';
import Home from './Components/Home';
import DataProvider from './Contexts/DataProvider';


function App() {
  return (
   <div className='containerBox'>
     <DataProvider>
       <Home/>
     </DataProvider>  
   </div>
  );
}

export default App;
