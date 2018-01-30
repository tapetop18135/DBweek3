"use strict";

// $(function(){
	$('#btn-add').click(function(event){
		event.preventDefault();
		$.ajax({
			type:'post',
			url:'/admin/db/addCSV',
			success: result
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
			url:'/admin/db/manualCMD'
			// success:resultCMD
		})
	});
// })

var result = function(data){
	console.log(data)
}
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
}
var showDatabase =  function(data){
		// console.log(data);
		var string = '<div>'
		for(var i = 0 ; i < data.length ; i+= 1){
			for(var key in data[i]){
				string += data[i][key]+" "
			} 
			string += "<br>"
		}
		// console.log(data.length);
		string += '</div>';
		$('#rows-count').html(data.length);
		$('#showDB').html(string);

	}
var i = 0
var realtime = function(){
	
	i+=1;
	$.ajax({
			type:'post',
			url:'/admin/db/showDB',
			success: showDatabase
		})

}
setInterval('realtime()',500);