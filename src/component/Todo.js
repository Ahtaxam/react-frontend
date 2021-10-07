import React , {useEffect , useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Todo() {
    const [todos,setTodo] = useState([])

    useEffect(() =>{
        getTodos()
    },[])

    const getTodos = async () =>{
        const response = await fetch("http://localhost:8000/api/todo")
        const data = await response.json()
        setTodo(data)
        
    }

    const deleteTodo = (id)=>{   
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then(() => getTodos())
    }


    return (
        <div>
            <Link to = {`/add`} className = "btn btn-primary m-4">Add Todo</Link>
            <table className="table  container">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th colSpan = '2' >Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    todos.map(res =>(
                        <tr key = {res.id} >
                            <td> {res.id} </td>
                            <td> {res.title} </td>
                            <td>{ res.desc }</td>
                            <td><Link to = {`/to/${res.id}`} className = "btn btn-warning" >Edit</Link></td>
                            <td> <button className = "btn btn-danger" onClick = {() =>deleteTodo(res.id)} >Delete</button> </td>
                        </tr>
                    ))
                }
               </tbody>
                
            </table>
        </div>
    )
}

export default Todo
