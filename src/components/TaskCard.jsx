function TaskCard({ task, deleteTask }) {
	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.description}</p>
			{/* send the task id to the deleteTask function in the parent component CHILD -> PARENT -> PARENT */}
			<button onClick={() => deleteTask(task.id)}>Delete Task</button>
		</div>
	);
}

export default TaskCard;
