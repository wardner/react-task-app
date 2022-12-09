import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
	// create a state for the title and description
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const { createTask } = useContext(TaskContext);

	const handleSubmit = (e) => {
		// prevent the page from reloading cause is a form
		e.preventDefault();

		// use the createTask function from the context
		createTask({ title, description });

		// clear the form, setting the state to empty string
		setTitle("");
		setDescription("");
	};

	return (
		<div className='max-w-md mx-auto'>
			<form
				onSubmit={handleSubmit}
				className='bg-slate-800 p-10 mb-4 rounded-md'
			>
				<h1 className='text-white font-bold text-2xl mb-3'>Add your task</h1>
				<input
					type='text'
					placeholder='Whats your task?'
					// set the state with the value of the input
					onChange={(e) => setTitle(e.target.value)}
					// asign the state to the value of the input
					value={title}
					className='w-full bg-slate-700 text-white p-3 mb-4 rounded-md'
					autoFocus
				/>
				<textarea
					name='Description'
					placeholder='Describe your task'
					// set the state with the value of the textarea
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					className='w-full bg-slate-700 text-white p-3 mb-4 rounded-md'
					// asign the state to the value of the textarea
					value={description}
				></textarea>
				<button className='inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'>
					Save
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
