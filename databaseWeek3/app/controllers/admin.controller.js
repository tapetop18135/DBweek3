var fs = require('fs');
var CSV = require('csv-string');
var DatabaseST = require('../models/students.model');
var dbstudent = new DatabaseST();
		

function Admin(){
	this.adminP = function(req,res){
		res.send('Admin page');	
	}

	this.showDB = function(req,res){

		res.render('admin_dbManual',{title:"Admin"});

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
		var namCSV = req.body.name
		console.log(namCSV)
	 	fs.readFile('upload/'+namCSV,'utf8',function(err,data_csv){
	 		if(err) return;
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
	this.sqlCMD = function(req,res){
		var sql = req.body.sql
		// var sql = "select * from stude";
		dbstudent.console(sql,function(err,data){
			// var data = {e : err, data : datasql}
			if(err){
				res.send([true,data]);
				return;
			}
			else{
				res.send(data)
			}
		})
		// console.log(sql);
	}
	
}

module.exports = new Admin();