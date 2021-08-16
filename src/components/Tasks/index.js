const Tasks = ({ tasks }) => {
    return(
        <div className="tasks">
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => {
                    return(
                        <li key={task.id}>
                            <div>
                                <a href={task.url}>{task.title}: </a>
                                <span>{task.content}</span>
                            </div>
                            <div>
                                <span>{task.due}</span> | <span>{task.done ? 'Done' : 'To do'}</span>
                            </div>
                        </li>
                    );
                }
                )}
            </ul>
        </div>
    )
}

export default Tasks