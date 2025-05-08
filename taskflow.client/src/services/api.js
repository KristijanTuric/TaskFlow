const api = {

    // Get all tasks
    getAll: async () => {
        const response = await fetch("http://localhost:5174/api/tasks");
        return response.json();
    },

    // Add task
    create: async (task) => {
        const response = await fetch("http://localhost:5174/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });

        if (!response.ok) {
            throw new Error("Failed to create task");
        }

        return response.json();
    },

    // Get task by id
    getById: async (id) => {
        const response = await fetch(`http://localhost:5174/api/tasks/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 404) {
            return null;
        }

        if (!response.ok) {
            throw new Error(`Failed to fetch task with ID: ${id}`);
        }

        return response.json();
    },

    // Update task info
    update: async (id, task) => {
        const response = await fetch(`http://localhost:5174/api/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });
        return response.json();
    }
};

export default api;