"use strict";

$(function(){
	$('#btn-show').click(function(event){
		event.preventDefault();
		$.ajax({
			type:'post',
			url:'/admin/db/showDB',
			success: showDatabase
		})
	});

	$('#btn-clear').click(function(event){
		event.preventDefault();
		$('#showDB').html("");
	})

	$('#btn-dbcmd').click(function(event){
		event.preventDefault();
		var data = $('#sql-cmd').val();
		$.ajax({
			type:'post',
			data: {sql:data},
			url:'/admin/db/manualCMD',
			success:resultCMD
		})
	});
})


var resultCMD = function(data){
	if(data[0] === true){
		var string = "<div>"
		for(var k in data[1]){
			string += k + " : " + data[1][k]+"<br>"
		}

		string += "</div>"
		$('#showDB').html(string);
		return;
	}else{

		var string = '<div>'
		for(var i = 0 ; i < data.length ; i+= 1){
			for(var key in data[i]){
				string += data[i][key]+" "
			} 
			string += "<br>"
		}

		string += '</div>';
		$('#showDB').html(string);

	}
	// var string = '<div>'
	// for(var i = 0 ; i < data.length ; i+= 1){
	// 	for(var key in data[i]){
	// 		string += data[i][key]+" "
	// 	} 
	// 	string += "<br>"
	// }

	// string += '</div>';
	// $('#showDB').html(string);

}




var showDatabase =  function(data){
		var string = '<div>'
		for(var i = 0 ; i < data.length ; i+= 1){
			for(var key in data[i]){
				string += data[i][key]+" "
			} 
			string += "<br>"
		}

		string += '</div>';
		$('#showDB').html(string);

	}