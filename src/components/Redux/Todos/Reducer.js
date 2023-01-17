

const initialState={
    loading:false,
    todos:[],
    error:''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'todos_req':
            return{
                ...state,
                loading:true
            }
        case 'todos_success':
            return {
                loading: false,
                todos:action.payload,
                error:''
            }
        case 'todos_fail':
            return{
                loading:false,
                todos:[],
                error:action.payload
            }

    }
}