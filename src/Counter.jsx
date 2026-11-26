import { useDispatch, useSelector } from "react-redux";
import { decrement, getCounter, getDoubleCounter, increment } from "./CounterSlice";

export default function Counter(){
    const counter = useSelector(state => state.counter);//state = Kumpulan state,
    const doubleCounter = useSelector(getDoubleCounter); {/*selector*/}
    const tripleCounter = useSelector(state => getCounter(state, 3));{/*selector dengan parameter*/}
    const dispatch = useDispatch();

    function handleIncrement(){
        dispatch(increment());
    }

    function handleDecrement(){
        dispatch(decrement())
    }

    function handleIncrementPlus2(){
        dispatch(increment(2));//2 itu payloadnya
    }

    function handleDecrementMin2(){
        dispatch(decrement(2))//2 itu payloadnya
    }

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <h1>Double Counter: {doubleCounter}</h1> {/* Kalo state berubah, selector pasti berubah*/}
            <h1>Triple Counter: {tripleCounter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleIncrementPlus2}>Increment +2</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleDecrementMin2}>Decrement -2</button>
        </div>
    )
}