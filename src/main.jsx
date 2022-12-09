import { TaskContextProvider } from "./context/TaskContext";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* set the context provider to the app. Now the app and all the child components have access to the context */}
		<TaskContextProvider>
			<App />
		</TaskContextProvider>
	</React.StrictMode>
);
