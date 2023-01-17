
import { add_user, fetch_user_failure, fetch_user_req, fetch_user_success } from './Reducer';
import axios from 'axios';

export const success=(users)=>{
    return{
        type: fetch_user_success,
        payload: users
    }
}

export const failure=(error)=>{
    return{
        type: fetch_user_failure,
        payload: error
    }
}

export const request=()=>{
    return{
        type: fetch_user_req
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(request)
        axios.get('http://localhost:3001/users')
        .then(response=>{
            const users= response.data
            dispatch(success(users))
        })
        .catch(error=>{
            dispatch(failure(error))
            const errorMsg = error.message
        })
    }
}
