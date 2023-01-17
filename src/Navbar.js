import {NavLink} from "react-router-dom";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from "react-redux";
import { fetchTodos } from "./components/Redux/Todos/Actions";
const linkStyle = {
  paddingTop: "5rem",
  textDecoration: "none",
  color: 'white'
};

const linkStyle2={
  background: 'black',
  color:'white'
  
}

export const Navbar = () => {
  const dispatch=useDispatch();
  return (<>
    <Container fluid="true">
      <Row style={linkStyle2}>
        <Col>
        <h2><center>Welcome to Todo App</center></h2>
        </Col>
        <Col md="1"><center>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        </center>
        </Col>
        <Col md="1"><center>
          <NavLink to="Profiles" style={linkStyle}>Profile</NavLink></center>
          </Col>
        <Col md="1"><center>
        <NavLink to="AddTodoForm" style={linkStyle} onClick={dispatch(fetchTodos())}>Todos</NavLink>
        </center>
        </Col>
      </Row>
    </Container>
     </>
  )
}
