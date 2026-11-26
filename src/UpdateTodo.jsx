import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getTodo, updateTodo } from "./todoListSlice";
import { useState } from "react";

export default function UpdateTodo(){
    const params = useParams();
    const todo = useSelector((state) => getTodo(state, Number(params.id)));
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClickUpdateTodo(){
        dispatch(updateTodo({id: todo.id, name: todo.name}));
        navigate("/todolist")
    }

    function handleChange(e){
        setName(e.target.value)
    }

    return (
        <div>
            <h1>Edit Todo</h1>
            <input type="text" value={name} onChange={handleChange} placeholder="Todo name"/>
            <button onClick={handleClickUpdateTodo}>Update</button>
        </div>
    )

}