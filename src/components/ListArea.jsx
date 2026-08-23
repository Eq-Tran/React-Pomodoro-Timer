import React from 'react';

const ListArea = ({ taskData }) => {
	return (
		<div className="list-area">
			{taskData.map((task, index) => (
				<p key={`${task}-${index}`}>{task}</p>
			))}
		</div>
	);
};

export default ListArea;
