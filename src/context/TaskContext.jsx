import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

// create a context to share data between components
export const TaskContext = createContext();

export function TaskContextProvider(props) {
	// create a state for the tasks
	const [tasks, setTasks] = useState([]);

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

	// create an effet that will run only once when the component is mounted
	useEffect(() => {
		setTasks(data);
	}, []);

	return (
		// set the value of the context to the state and the functions that will be send to the child components (means all components)
		<TaskContext.Provider
			value={{
				tasks,
				createTask,
				deleteTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}
