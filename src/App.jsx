import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

	const taskTitle = (title) => {
		setTasks([
			...tasks,
			{
				title,
				id: tasks.length,
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			},
		]);
	};

	return (
		<>
			<TaskForm taskTitle={taskTitle} />
			<TaskList tasks={tasks} />
		</>
	);
}

export default App;
