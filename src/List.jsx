import React from 'react';
import './index.css'
import { useSelector } from 'react-redux'

function List(){

  let state = useSelector(state => state)

    return (
      <div className="list">
        <h1>{state.listName}</h1>
       {state.arr.map((item) => {
              return(
                <div>
                <a href={`https://www.imdb.com/title/${item.imdbID}/?ref_=adv_li_tt`}>{item.Title}</a>             
                </div>               
              ) 
            })} 
      </div>
    );
  
    
  
}

export default List