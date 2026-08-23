import React from 'react';

const ListArea = ({ taskData }) => {
	return (
		<div className="list-area">
			<ul>
				{taskData.map((task, index) => (
					<li key={`${task}-${index}`}>{task}</li>
				))}
			</ul>
		</div>
	);
};

export default ListArea;
