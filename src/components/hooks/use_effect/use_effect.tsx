// make an api call using useEffect

import { useEffect, useState } from "react"
import axios from 'axios';

interface Todo {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}


export const APICall = () => {

    const [json, setJson] = useState<Todo | null>(null);

    useEffect(() => {
        async function fetchTodo() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
                const todo = response.data;
                setJson(todo);
            } catch (error) {
                console.error('Error fetching todo:', error);
            }
        }

        fetchTodo()

    }, []);

    return (
        <>
            <h2>useEffect</h2>

            <p>{json ? json.title : 'No todo to show' }</p>
        </>
    )
}