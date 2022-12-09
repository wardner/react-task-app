import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
	// create a state for the tasks
	const [tasks, setTasks] = useState([]);

	// create an effet that will run only once when the component is mounted
	useEffect(() => {
		setTasks(data);
	}, []);

	// create a function that will be send to the child component PARENT -> CHILD and back
	const createTask = (task) => {
		setTasks([
			...tasks,
			{
				title: task.title,
				id: tasks.length,
				description: task.description,
			},
		]);
	};

	// create a function that will be send to the child component PARENT -> CHILD -> CHILD and back
	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};

	return (
		<>
			<TaskForm createTask={createTask} />
			<TaskList tasks={tasks} deleteTask={deleteTask} />
		</>
	);
}

export default App;
