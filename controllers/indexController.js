const indexService = require('../services/indexService');

exports.getIndex = async (req, res) => {
	try {
		const data = await indexService.getIndexData();
		res.render('index', { title: 'Express', data: data });
	} catch (error) {
		console.error(error);
		res.status(500).send('Server error');
	}
}; 