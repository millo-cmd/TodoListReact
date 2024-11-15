import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

export const TodoApp = ()=> {

    const initialState = [{
        id: new Date().getTime(),
        description: "recolectar piedra",
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: "recolectar piedra",
        done: false
    }

]

    useReducer [ state, dispatch] = useReducer(todoReducer, initialState )

    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </>
    )
}