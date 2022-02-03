import React from "react";
import { useDB } from "react-pouchdb/cjs";
import { DBNAME } from "./db";

function Item({ item }) {
    const db = useDB(DBNAME);
    const deleteTodo = (item) => {
        db.remove(item);
    }

    const makeTodoCompleted = (event, item) => {
        const isChecked = event.target.checked;
        item.isCompleted = isChecked;
        db.put(item);
    }

    return <li className="flex items-center justify-between">
        <div className="flex items-center">
            <svg className={`w-6 h-6 fill-sky-100 ${ item.isCompleted ? "stroke-sky-500 stroke-2" : ""}`} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <label>
                <input type="checkbox" name="todo-checkmark" className="hidden" checked={item.isCompleted} onChange={(event) => makeTodoCompleted(event, item)} />
                <p className={`ml-4 ${item.isCompleted ? "line-through" : ""} `}>
                    {item.title}
                </p>
            </label>
        </div>
        <button className="text-red-500 px-2" onClick={() => deleteTodo(item)}>x</button>
    </li>;
}

export default Item;
