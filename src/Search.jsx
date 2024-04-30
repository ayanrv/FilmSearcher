import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import {fetcher} from './store/reducer'


function Search(){  
  let dispatch = useDispatch()
  
  let text = useSelector(state => state.text)
  let value = useSelector(state => state.value)
  
  const add = (id) => {
    dispatch({type: 'ADD', payload: id})
  }
  const getSerchValue = (ev) => {
    dispatch({type: 'GET SEARCH',payload: ev.target.value})
  }
         
        return(
          <div className='search'>
            <div className='searching'>
              <input className='search-inp' value={value} type="text" onChange={getSerchValue} />
              <button className='search-button' onClick={() => dispatch(fetcher(value))}>FIND</button>
            </div>
            
            {text.map((item) => {
              return(
                <div>
                <h1>{item.Title}</h1>
                <img src={item.Poster} alt='poster'/>
                <div>
                <button onClick={() => add(item.imdbID)}>ADD</button>               
                </div>               
                </div>       
              ) 
            })}                      
          </div>
        ) 
}

export default Search