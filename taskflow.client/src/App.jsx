import { useEffect, useState } from "react";
import api from "./services/api.js";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import SearchTask from "./components/SearchTask.jsx";
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadTasks = async () => {
        setLoading(true);
        try {
            const res = await api.getAll(); 
            setTasks(res);
        } catch (error) {
            console.error("Error fetching tasks: ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskList tasks={tasks} loading={loading} />

            <h1>Add a New Task</h1>
            <AddTask loadTasks={loadTasks} />

            <h1>Search for a task</h1>
            <SearchTask />

        </div>
    );
}

export default App;