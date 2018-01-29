$(document).ready(function(){
	$('#btn-show').click(function(event){
		event.preventDefault();
		$.ajax({
			type:'post',
			url:'/admin/db/show',
			success: callback
		})
	})
	var callback =  function(data){
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
})