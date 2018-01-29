module.exports = function(app){

	app.get('/admin',require('../controllers/admin.controller').adminP);

	app.get('/admin/db/show',require('../controllers/admin.controller').showDB);

	app.post('/admin/db/show',require('../controllers/admin.controller').postshowDB);
	// app.get('/admin/db/addManual',require('../controllers/admin.controller').addDB);
	app.get('/admin/db/addCSV',require('../controllers/admin.controller').addCSV);

}