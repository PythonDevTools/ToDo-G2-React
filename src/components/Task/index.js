import { StyledTask } from "./index.styled"
import BtnDelete from "../Buttons/deleteBtn"
import BtnEdit from "../Buttons/editBtn"

const Task = ({ id, title, content, due, done, deleteTask, editTask }) => {
	let date = due.split('T')
	let day = date[0].split('-').reverse().join('/')
	let time = date[1].split('.')

	return(
		<StyledTask id={`task-${id}`}>
			<div className="task-title">
				<h3>Task #{id}: {title}</h3>
				<div className="action-buttons">
					<BtnEdit id={id} edit={true} editTask={editTask} />
					<BtnDelete id={id} edit={false} deleteTask={deleteTask} />
				</div>
			</div>
			<div className="task-content">
				<p>{content}</p>
			</div>
			<div className="wrapper-due">
				<div className="task-due">
					<p>Due: {`${day}`} at {`${time[0]}`}</p>
				</div>
				<div className="task-done">
					<p>Done? <span>{done ? '🟢' : '⛔'}</span></p>
				</div>
			</div>
		</StyledTask>
	)
}

export default Task