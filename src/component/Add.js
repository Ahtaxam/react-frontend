import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

function Add() {
    const history = useHistory()
    const [title,setTitle] = useState(null)
    const [desc,setDesc] = useState(null)
    const [date,setDate] = useState(null)
    const addTodo = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/add',{
            title,
            desc,
            date
        }).then(()=>console.log())
        history.push('/')
    }
    return (
        <div>
            <form className = "container col-6" onSubmit = {addTodo} >
            <div class="mb-3">
                <label  class="form-label">Title</label>
                <input type="text" 
                name = "title"
                class="form-control"
                onChange = {(e) =>setTitle(e.target.value)}
                
               
                />
            </div>
            <div class="mb-3">
                <label  class="form-label">Description</label>
                <input type="text" 
                name = 'desc'
                class="form-control" 
                 onChange = {(e) =>setDesc(e.target.value)}

                />
            </div>

            <div class="mb-3">
                <label  class="form-label">Date</label>
                <input type  = "date" 
                name = 'date'
                class="form-control" 
                onChange = {(e) =>setDate(e.target.value)}
                
                />
            </div>
            
            <button type="submit" class="btn btn-primary">Add</button>
            </form>
        </div>
    )
}

export default Add
