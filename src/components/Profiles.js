import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './Redux/User/Actions'

 const Profiles = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>{
    console.log(state.userReducer.users)
    return state.userReducer.users})
  console.log(data)
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (<>  
    <h3><center>Profile Page</center></h3>
    <div>
    <div>Name: {data.name}</div>
    <div>Phone: 9876154321</div>
    <div>Mail: Mike12@gmail.com</div>
    </div>
  </>
  )
}
export default Profiles