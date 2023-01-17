import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import Profiles  from './components/Profiles';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Navbar } from './Navbar';
import TodoEach from './components/TodoEach';

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Profiles" element={<Profiles/>}/>
    <Route>
      <Route path="AddTodoForm" element={<><AddTodoForm/> <TodoList /></>}/>
        <Route path="/AddTodoForm/:id" element={<TodoEach/>}/>
    </Route>
    </Routes>
    </BrowserRouter> 
  </div>
  );
}

export default App;
