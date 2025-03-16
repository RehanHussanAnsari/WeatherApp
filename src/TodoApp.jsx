import { useRef, useState } from "react"
import "./TodoApp.css"

export default function TodoApp() {
    let inpt = useRef(null);
    const [todo, todos] = useState([]);


    let addTask = () => {
        let temp = inpt.current.value;
        if(temp == "") return;
        inpt.current.value = "";
        todos((todo) => [...todo, temp]);
    }


    return (
        <div className="TodoApp">
                <h2>List your Todos</h2>
                <div className=" inpt mb-3">
                    <label className="form-label" htmlFor="tsk">Enter Task</label>
                    <input id="tsk" type="text" className="form-control" ref={inpt} />
                </div>
                <button type="submit" onClick={addTask} className="btn btn-primary">Submit</button>
            <ul>{todo.map((t) => <li>{t}</li>)}</ul>
        </div>
    );
}