import React from 'react';

function ListView({ activeView, allProduct }) {
	return (
		<div
			className={`${
				activeView === 'listView'
					? 'flex flex-col'
					: 'grid grid-cols-3'
			}`}>
			<h1>tica</h1>
			<h1>tica</h1>
			<h1>tica</h1>
			<h1>tica</h1>
			<h1>tica</h1>
		</div>
	);
}

export default ListView;
