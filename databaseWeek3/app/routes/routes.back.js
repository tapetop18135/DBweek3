module.exports = function(app){

	app.get('/admin',require('../controllers/admin.controller').adminP);

	app.get('/admin/db/show',require('../controllers/admin.controller').showDB);

	app.post('/admin/db/showDB',require('../controllers/admin.controller').postshowDB);
	// app.get('/admin/db/addManual',require('../controllers/admin.controller').addDB);
	app.post('/admin/db/addCSV',require('../controllers/admin.controller').addCSV);

	app.post('/admin/db/manualCMD',require('../controllers/admin.controller').sqlCMD);

}