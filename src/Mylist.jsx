import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
function Mylist(){   
  
  let dispatch = useDispatch()

  let arr = useSelector(state => state.arr)
  let listName = useSelector(state => state.listName)

  let [flag,setFlag] = useState(false)
  
  const del = (id) => {
    dispatch({type: 'DELETE', payload: id})
  } 

  const getListName = (ev) => {
    dispatch({type: 'GET LIST NAME',payload:ev.target.value})
  } 

  const change = () => {
    setFlag(true)  
  }
        return(
          <div className='mylist'>         
            <p>ListName</p>
            <div className='list-div'>
              <input value={listName} type="text" onChange={getListName}/>
              {flag ? <Link to='/list'>GET LIST</Link> : <button onClick={change}>CREATE LIST</button>}
            </div>
            
            {arr.map((item) => {
              return(
                <div>
                <h1>{item.Title}</h1> 
                <button onClick={() => del(item.imdbID)}>DELETE</button>
                </div>               
              ) 
            })}                       
          </div>
        ) 
}

export default Mylist