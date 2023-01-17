const initialState={
    loading:false,
    users:['fkgnfj'],
    error:''
}
export const fetch_user_req = "fetch_user_req"
export const fetch_user_success = "fetch_user_success"
export const fetch_user_failure = "fetch_user_failure"
export const add_user="add_user"

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case fetch_user_req:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case fetch_user_success:
            return{
                loading:true,
                users:action.payload,
                error:''
                
            }
        case fetch_user_failure:
            return{
                ...state,
                loading:true,
                users:[],
                error:action.payload
            }
    
        default: return state
    }
}
export default reducer