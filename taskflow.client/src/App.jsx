import { useEffect, useState } from "react";

import api from "./services/api.js";

import { Sidebar } from '../src/components/sidebar/Sidebar.jsx';
import { MainView } from '../src/components/MainView.jsx';

import TaskList from "./components/test/TaskList";
import AddTask from "./components/test/AddTask";
import SearchTask from "./components/test/SearchTask.jsx";
import UpdateTask from "./components/test/UpdateTask.jsx";
import DeleteTask from "./components/test/DeleteTask.jsx";
import DialogPortal from "./components/dialogs/DialogPortal.jsx";

import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);

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

    function handleSidebarToggle() {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar handleSidebarToggle={handleSidebarToggle} isOpen={sidebarOpen} />
            <MainView isOpen={sidebarOpen} />
        </div>
    );
}

export default App;