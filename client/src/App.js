import React, { useEffect, useState } from 'react';

function App() {
	const [backendData, setBackendData] = useState([{}]);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed
	const [isPopupOpen, setPopupOpen] = useState(false);
	useEffect(() => {
		fetch('/api')
			.then((response) => response.json())
			.then((data) => {
				setBackendData(data);
			});
	}, []);
	return (
		<div>
			{isMobile ? (
				// This is mobile View
				<div>a</div>
			) : (
				// This is Desktop View
				<div></div>
			)}
		</div>
	);
}

export default App;
