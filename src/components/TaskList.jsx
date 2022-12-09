import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import TaskCard from "./TaskCard";

function TaskList() {
	// get the tasks from the context
	const { tasks } = useContext(TaskContext);

	// if there is no tasks, show a message
	if (!tasks.length) {
		return <h1>It seems that you doesnt have task yet</h1>;
	}

	return (
		<div>
			{/* map the tasks and send the task and the deleteTask function to the TaskCard component */}
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
}

export default TaskList;
