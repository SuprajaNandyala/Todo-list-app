import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete } from './Redux/Slice';
import { deleteTodo } from './Redux/Slice';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import TodoEach from './TodoEach';
import {NavLink} from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };

const TodoItem = ({id, title, completed }) => {
    const dispatch = useDispatch();
    const handlerforComplete=()=>{
        dispatch(toggleComplete({id:id,completed:!completed}))
        axios.patch(`http://localhost:3001/Todos/${id}`,{completed:!completed})
    }

    const handleDelete=(e,id)=>{
        e.preventDefault();
        console.log(id);
        axios.delete(`http://localhost:3001/Todos/${id}`).then(response=>dispatch(deleteTodo({id:id}) ))
    }

    return ( 
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
        
            <div className='d-flex justify-content-between' >
                <span className='d-flex align-items-center'>
                    <input type='checkbox' className='mr-3' checked={completed} onChange={handlerforComplete }></input>
                    <NavLink to={`${id}`} style={linkStyle}>
                    {title}
                     </NavLink>
                </span>
                <Button onClick={e=>handleDelete(e,id)}  variant='outline-danger'>Delete</Button>
            </div>
        </li>
    );
};

export default TodoItem;
