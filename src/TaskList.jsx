function TaskList({ tasks }) {
	if (!tasks.length) {
		return <h1>It seems that you doesnt have task yet</h1>;
	}

	return (
		<div>
			{tasks.map((task, i) => (
				<div key={i}>
					<h1>{task.title}</h1>
					<p>{task.description}</p>
				</div>
			))}
		</div>
	);
}

export default TaskList;
