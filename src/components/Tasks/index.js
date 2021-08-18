import Task from "../Task";

const Tasks = ({ tasks }) => {
    return(
        <div className="tasks">
            {tasks.map(({ id, title, content, due, done}) => {
                return(
                    <Task id={id} title={title} content={content} due={due} done={done} />
                );
                }
            )}
        </div>
    )
}

export default Tasks