let initial = {
    text: [],    
    arr:[],
    value: '',
    listName:''
}

export const fetcher = (val) => { 
    return function(dispatch){      
        fetch(`https://www.omdbapi.com/?apikey=d554bc03&s=${val}`)
        .then(res => res.json())
        .then((data) =>{ 
            dispatch({type:'FIND', payload:data.Search})
     })
    }
}

export const reducer = (state = initial,action) => {
    switch(action.type){
        case 'ADD':  
        let obj = state.text.find((item) => {
            return item.imdbID === action.payload
          }
        )
        let arr = [...state.arr] 
        if(!state.arr.includes(obj)){
           arr = [...state.arr, obj]            
        }    
        return {...state,arr}
        case 'DELETE':
            return {...state, arr:state.arr.filter((item) => item.imdbID !== action.payload)}
        case 'GET LIST NAME':    
                return  {...state,listName:action.payload} 
        case 'GET SEARCH':              
            return  {...state,value:action.payload}
            
        case 'FIND':         
            console.log(state.text)
            return {...state, text: [...action.payload]}
          
    }
    return state
}