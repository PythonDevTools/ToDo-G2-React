// Functional component React Task using Tailwind CSS

const Task = ({ id, title, content, due, done}) => {
    return(
        <div className="task">
            <div className="task-title">
                <h3>{title}</h3>
            </div>
            <div className="task-content">
                <p>{content}</p>
            </div>
            <div className="task-due">
                <p>Due: {due}</p>
            </div>
            <div className="task-done">
                <p>Done: {done}</p>
            </div>
        </div>
    )
}

export default Task