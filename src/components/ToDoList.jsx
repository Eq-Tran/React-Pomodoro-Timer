import React, { useState } from 'react';

const ToDoList = () => {
    const [task, setTask] = useState("");

    function handleChange(e) {
        setTask(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(task);
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
                <input type="submit"/>
            </form>
		</section>
	);
};

export default ToDoList;
