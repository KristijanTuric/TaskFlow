import { useState } from "react";
import api from "../services/api.js";

export default function SearchTask() {
    const [taskId, setTaskId] = useState("");
    const [task, setTask] = useState(null);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setHasSearched(true);
        setTask(null);
        setError(null);

        if (taskId === "") return;

        try {
            const res = await api.getById(Number(taskId));
            if (res) {
                setTask(res);
            } else {
                setError("Task not found");
            }
        } catch (err) {
            setError("Error fetching task");
            console.error(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Task Id (e.g., 0, 1, ...)"
                    value={taskId}
                    onChange={(e) => setTaskId(e.target.value)}
                />
                <button type="submit">Does this task exist?</button>
            </form>

            {hasSearched && (
                <>
                    {task ? (
                        <div>Task was found: {task.title}</div>
                    ) : (
                        <div>{error}</div>
                    )}
                </>
            )}

        </>
    );
}