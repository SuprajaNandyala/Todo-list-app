import { useParams } from "react-router-dom"
import React from 'react';
import { useSelector} from 'react-redux';

const TodoEach = () => {
    const params = useParams()
console.log(params)
    const userId = params.id

    const data=useSelector(state => state.todos)
 
    const elem=data.findIndex(item =>
        item.id == userId )
        console.log(data[elem])

  return (
    <div>
        <h2> Todo Task</h2>
        <div>
          Title : {data[elem].title }<br></br>
          Description : {data[elem].description}
        </div>
    </div>
  )
}

export default TodoEach