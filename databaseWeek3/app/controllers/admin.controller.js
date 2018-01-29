var fs = require('fs');
var CSV = require('csv-string');
var DatabaseST = require('../models/students.model');
var dbstudent = new DatabaseST();
		

function Admin(){
	this.adminP = function(req,res){
		res.send('Admin page');	
	}

	this.showDB = function(req,res){
		// var datareal ;
		res.render('admin_dbManual',{title:"Admin"});
		// dbstudent.showAll(function(err,row){
		// 	if(err){
		// 		console.log('Error')
		// 		return
		// 	}
		// 	var data = {
		// 		title:'Add DB',
		// 		student_list:row
		// 		// student_list:[{"id":"5801012610031","year_st":"2558","semester":"1","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610033","year_st":"2559","semester":"2","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610034","year_st":"2560","semester":"3","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610035","year_st":"2561","semester":"4","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610036","year_st":"2562","semester":"5","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610037","year_st":"2563","semester":"6","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610038","year_st":"2564","semester":"7","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610039","year_st":"2565","semester":"8","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610040","year_st":"2566","semester":"9","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610041","year_st":"2567","semester":"10","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610042","year_st":"2568","semester":"11","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610043","year_st":"2569","semester":"12","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610044","year_st":"2570","semester":"13","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610045","year_st":"2571","semester":"14","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610046","year_st":"2572","semester":"15","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610047","year_st":"2573","semester":"16","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610048","year_st":"2574","semester":"17","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610049","year_st":"2575","semester":"18","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610050","year_st":"2576","semester":"19","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610051","year_st":"2577","semester":"20","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610052","year_st":"2578","semester":"21","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610053","year_st":"2579","semester":"22","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610054","year_st":"2580","semester":"23","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610055","year_st":"2581","semester":"24","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610056","year_st":"2582","semester":"25","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610057","year_st":"2583","semester":"26","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610058","year_st":"2584","semester":"27","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610059","year_st":"2585","semester":"28","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610060","year_st":"2586","semester":"29","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610061","year_st":"2587","semester":"30","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610062","year_st":"2588","semester":"31","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610063","year_st":"2589","semester":"32","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610064","year_st":"2590","semester":"33","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610065","year_st":"2591","semester":"34","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610066","year_st":"2592","semester":"35","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"},{"id":"5801012610067","year_st":"2593","semester":"36","id_sub":"10123101","credits":"1","gpa":"B+","score":"4","name_sub":"INTRODUCTION TO COMPUTER"}]
		// 	}
			
		// })
		
		// res.send('db Page')
	}
	this.addDB = function(req,res){
		dbstudent.addStudent('30030201','2558','1','110021','3','A','4','general mathmetic',function(result){
			// console.log(result)
			if(true){
				dbstudent.showAll(function(data){
					res.send(data);
				})	
			}else{
				res.send('Data is duplicate');
			}
			
			// res.send(result);
			// a();
		})
	}
	this.addCSV = function(req,res){
	 	fs.readFile('upload/test.csv','utf8',function(err,data_csv){
	 		if(err) throw err
	 		var arr = CSV.parse(data_csv)
	 		for(var i = 0 ; i < arr.length ; i+= 1){
	 			// console.log(i+" "+);
				dbstudent.addStudents(arr[i][0],arr[i][1],arr[i][2],arr[i][3],arr[i][5],arr[i][6],arr[i][7],arr[i][4],function(err){
					if(err) return	
					else{
						console.log("Add");
					}
				})   	
	 		}
	 		dbstudent.showAll(function(err,data){
				res.send(data);
			})
	 		
	 	})
	 	
	    
	    // ;
	}
	this.postshowDB = function(req,res){

		dbstudent.showAll(function(err,row){
			if(err){
				console.log('Error')
				return
			}
			res.send(row);
		})

	}

	
}

module.exports = new Admin();