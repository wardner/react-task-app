import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
	if (!tasks.length) {
		return <h1>It seems that you doesnt have task yet</h1>;
	}

	return (
		<div>
			{/* map the tasks and send the task and the deleteTask function to the TaskCard component */}
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} deleteTask={deleteTask} />
			))}
		</div>
	);
}

export default TaskList;
