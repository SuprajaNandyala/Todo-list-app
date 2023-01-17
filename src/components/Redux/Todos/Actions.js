import axios from "axios"
import { addTodo } from "../Slice"
export const todosreq=()=>{
    return{
        type:'todos_req'
    }
}

export const todosuccess=res=>{
    return{
    type:'todos_success',
    payload:res
    }
}

export const todofailure=error=>{
    return {
        type: 'todos_fail',
        payload:error
    }
}

export const fetchTodos=()=>{
    return (async(dispatch)=>{
        dispatch(todosreq)
        await axios.get('http://localhost:3001/Todos')
        .then((response)=>{
            const res=response.data
            res.map((initvalue)=> dispatch(addTodo(initvalue)))
            console.log(res)
        })
        .catch(err=>{
            const errormsg=err.message
            dispatch(todofailure(errormsg))
        })
    })
    }