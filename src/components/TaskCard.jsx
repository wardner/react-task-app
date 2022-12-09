import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
	// get the deleteTask function from the context
	const { deleteTask } = useContext(TaskContext);

	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.description}</p>
			{/* execute the deleteTask function from the context */}
			<button onClick={() => deleteTask(task.id)}>Delete Task</button>
		</div>
	);
}

export default TaskCard;
