import { useState } from "react";

function TaskForm({ taskTitle }) {
	const [title, setTitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		taskTitle(title);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Type your task'
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input type='text' placeholder='Describe your task' />
			<button>Save</button>
		</form>
	);
}

export default TaskForm;
