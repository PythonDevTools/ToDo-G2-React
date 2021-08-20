import Task from "../Task";
import { StyledTasks } from "./index.styled"

const Tasks = ({ tasks }) => {
    return(
        <StyledTasks>
            {tasks.map(({ id, title, content, due, done }) => {
                return(
                    <Task key={`key-${id}`} id={id} title={title} content={content} due={due} done={done} />
                );
                }
            )}
        </StyledTasks>
    )
}

export default Tasks