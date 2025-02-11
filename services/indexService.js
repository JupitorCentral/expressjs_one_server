exports.getIndexData = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ message: 'Hello from Service Layer!' });
		}, 500); // Simulate data fetching delay
	});
}; 