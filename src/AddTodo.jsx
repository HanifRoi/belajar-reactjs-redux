import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addTodo } from "./todoListSlice";

export default function AddTodo(){
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate =  useNavigate();

    function handleClickAddTodo(){
        dispatch(addTodo({name: name}));
        navigate("/todolist");
    }

    function handleChange(e){
        setName(e.target.value)
    }

    return (
        <div>
            <h1>Add Todo</h1>
            <input type="text" placeholder="Add Todo" onChange={handleChange}/>
            <button onClick={handleClickAddTodo}>Add</button>
        </div>
    )
}