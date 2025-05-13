import { useState } from "react";
import api from "../../services/api.js";

export default function AddTask({loadTasks}) {
    const [taskTitle, setTaskTitle] = useState("");

    async function  handleSubmit(e) {
        e.preventDefault();
        const newTask = { title: taskTitle, isCompleted: false };

        try {
            const createdTask = await api.create(newTask);
            console.log("Task created: ", createdTask);

            setTaskTitle("");
            loadTasks();
        } catch (err) {
            console.error("Error creating task: ", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}