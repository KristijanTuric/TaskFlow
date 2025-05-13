export default function TaskList({ tasks, loading }) {

    return (
        <div>
            { loading ? (
                <div>Loading...</div >
            ) : tasks.length === 0 ? (
                <div>There are no tasks!</div>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>{task.title} - {task.id}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}