import { useState } from "react";
import api from "../services/api.js";

export default function UpdateTask({loadTasks}) {
    const [taskId, setTaskId] = useState("");
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        if (taskId === "" || newTaskTitle === "") return;

        const newTask = { title: newTaskTitle, isCompleted: false };

        try {
            const res = await api.update(Number(taskId), newTask);
            if (res) {
                setError("Task updated!");
                loadTasks();
            } else {
                setError("Task not found");
            }
        } catch (err) {
            setError("Error fetching task");
            console.error(err);
        }
    }

    return (
        <form>
            <input
                type="number"
                placeholder="Task Id (1, 2, ...)"
                value={taskId}
                onChange={(e) => setTaskId(e.target.value)}
            />

            <input
                type="text"
                placeholder="New Task Title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
            />

            <button type="submit" onClick={handleSubmit}>Try to Update</button>

            <div>{error}</div>
        </form>
    );
}