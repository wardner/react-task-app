import { useState } from "react";

function TaskForm({ createTask }) {
	// create a state for the title and description, this data will be send to the parent component
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		// prevent the page from reloading cause is a form
		e.preventDefault();

		// create a new task and send it to the parent component CHILD -> PARENT
		createTask({ title, description });

		// clear the form, setting the state to empty string
		setTitle("");
		setDescription("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Type your task'
				// set the state with the value of the input
				onChange={(e) => setTitle(e.target.value)}
				// asign the state to the value of the input
				value={title}
				autoFocus
			/>
			<textarea
				name='Description'
				placeholder='Describe your task'
				// set the state with the value of the textarea
				onChange={(e) => {
					setDescription(e.target.value);
				}}
				// asign the state to the value of the textarea
				value={description}
			></textarea>
			<button>Save</button>
		</form>
	);
}

export default TaskForm;
