exports.getAllUsers = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 1, name: 'User 1' },
				{ id: 2, name: 'User 2' },
				{ id: 3, name: 'User 3' }
			]);
		}, 1000); // Simulate data fetching delay
	});
}; 