import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './Slice'
import reducer from './User/Reducer';
import thunk from 'redux-thunk';

export default configureStore({
    reducer:{
        todos: todoReducer,
        userReducer: reducer
    },
    
});