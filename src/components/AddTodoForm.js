import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from './Redux/Slice';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const AddTodoForm = () => {
     const [value, setValue] = useState('');
     const [description, setDescription] = useState('');
     const dispatch=useDispatch();
    
    const onSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/Todos', {title:value,completed:false,description:description})
        .then((response) =>{
            console.log(response.data)
            dispatch(addTodo(response.data))})
        setValue('')
        setDescription('')
        console.log('user entered: ' + value);
    };

    return (<>
        <Form onSubmit={onSubmit} className='form-inline mt-5 mb-4'>
            <Stack direction="vertical" gap={3}>
            <input
                type='text'
                className='form-control mb-2 mr-sm-2'
                placeholder='Add todo...'
                value={value}
                onChange={(event) => setValue(event.target.value)}/>
                <textarea placeholder='Enter description' value={description} onChange={(event) => setDescription(event.target.value)}/>
                    
           
            </Stack><br></br>
                <center>
            <Button type='submit' className= 'btn-primary mb-2'>

                Submit
            </Button>
            </center>
        </Form> </>
    );
};

export default AddTodoForm;
