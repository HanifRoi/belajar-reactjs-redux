import { useSelector } from "react-redux";

export default function Counter(){
    let counter = useSelector(state => state.counter);//state = Kumpulan state,

    return (
        <div>
            <h1>Counter : {counter}</h1>
        </div>
    )
}