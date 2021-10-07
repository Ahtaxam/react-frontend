import axios from 'axios'
import React , {useState,useEffect} from 'react'
import { useHistory, useParams } from 'react-router'

function Todoid() {
    const history = useHistory()
    const {id} = useParams()
    const [todo,setTodo] = useState({
        title:'',
        desc : '',
        date:''
    })
    const {title,desc,date} = todo
    useEffect(() =>{
        getTodo()
    },[])

    const getTodo = async ()=>{
        const response = await fetch(`http://localhost:8000/api/todoid/${id}`)
        const data =await response.json()
        setTodo(data)
    }

    const change = (e)=>{
        
        setTodo({...todo,[e.target.name]:e.target.value})
    }

    const updateData = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`,todo).then(()=>console.log())
        console.log(todo);
        history.push('/')
    }
    
    return (
        <div>
           
            <form className = "container col-6" onSubmit = {updateData} >
            <div class="mb-3">
                <label  class="form-label">Title</label>
                <input type="text" 
                name = "title"
                class="form-control"
                value = {title} 
                onChange = {(e) =>change(e)}
               
                />
            </div>
            <div class="mb-3">
                <label  class="form-label">Description</label>
                <input type="text" 
                name = 'desc'
                class="form-control" 
                value = {desc}
                onChange = {(e) =>change(e)}

                />
            </div>

            <div class="mb-3">
                <label  class="form-label">Description</label>
                <input type  = "datetime" 
                name = 'date'
                class="form-control" 
                value = {date}
                onChange = {(e) =>change(e)} 
                />
            </div>
            
            <button type="submit" class="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}

export default Todoid
