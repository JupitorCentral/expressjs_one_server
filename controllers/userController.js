const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
	try {
		const users = await userService.getAllUsers();
		res.render('user', { title: 'Users', users: users });
	} catch (error) {
		console.error(error);
		res.status(500).send('Server error');
	}
}; 