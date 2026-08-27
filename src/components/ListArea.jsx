import React from 'react';

const ListArea = ({ taskData }) => {
	return (
		<div className="list-area">
			<ul>
				{taskData.map((task, index) => (
					<li key={`${task}-${index}`}>
						{/* Added a label and checkbox for marking each task. */}
						<label className="list-item-label">
							<input type="checkbox" />
							<span>{task}</span>
						</label>
						{/* Added an unbound delete button for future React functionality. */}
						<button type="button" aria-label={`Delete ${task}`}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListArea;
