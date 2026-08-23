import React, { useState } from 'react';

// Pass submitted task text to the parent instead of owning the task list here.
const ToDoList = ({ onTaskAdd }) => {
    const [task, setTask] = useState("");

    function handleChange(e) {
        setTask(e.target.value);
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (task.trim()) {
            // Ignore empty submissions and send valid task data to App.
            onTaskAdd(task.trim());
        }
        setTask('');
    }

	return (
		<section>
            <h2>To-Do List</h2>
            <form onSubmit={handleSubmit}>
                <label>Tasks:
                    <input 
                    type="text"
                    value={task}
                    onChange={handleChange} />
                </label>
                <input type="submit" value="Add"/>
            </form>
		</section>
	);
};

export default ToDoList;
