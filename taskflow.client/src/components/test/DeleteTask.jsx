import { useState } from "react";
import api from "../../services/api.js";

export default function DeleteTask({loadTasks}) {
    const [taskId, setTaskId] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        if (taskId === "") return;

        try {
            const res = await api.deleteTask(Number(taskId));
            if (res) {
                setError("Task deleted!");
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

            <button type="submit" onClick={handleSubmit}>Delete Task</button>

            <div>{error}</div>
        </form>
    );
}