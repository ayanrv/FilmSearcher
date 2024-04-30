import React from 'react';
import Main from './Main'
import List from './List'
import {Routes,Route} from 'react-router-dom'
import './index.css'

function App(){
    return (
      <div className="app">
      <h1 className='app-name'>FILMS SEARCHER</h1>
      <Routes>
      <Route path='' element={ <Main/>}/>
      <Route path='/list' element={<List />}/>
      </Routes>   
      </div>
    );
  
}

export default App;