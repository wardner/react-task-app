import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
	// get the deleteTask function from the context
	const { deleteTask } = useContext(TaskContext);

	return (
		<div className='bg-gray-800 text-white p-4 rounded-md'>
			<h1 className='text-xl font-bold capitalize'>{task.title}</h1>
			<p className='text-gray-500 text-m mb-4'>{task.description}</p>
			{/* execute the deleteTask function from the context */}
			<button
				className='inline-block px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
				onClick={() => deleteTask(task.id)}
			>
				Delete
			</button>
		</div>
	);
}

export default TaskCard;
