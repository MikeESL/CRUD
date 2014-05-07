$(document).ready(function() {
//POST	
	var URL = "http://tiy-fee-rest.herokuapp.com/collections/mike";

	var todayDo = _.template($("#todayTmpl").html(), todayToDos);
	$("#todaytodoSubmit").submit (function(e) {
	e.preventDefault();

	var todayTask = $(".taskToday").val();

	var todayToDosObj = {

					todayDo: todayTask
	};

	todayToDos.push(todayToDosObj);
		$.post(URL, todayToDosObj);

	var todayTaskString = _.template($("#todayTmpl").html(), todayToDos);

});
//GET	
$(".btnGet").click(function(event){

	$.ajax({
		url: "http://tiy-fee-rest.herokuapp.com/collections/mike",
		type: 'GET',
		data: 'data',
		error: function(data){
			alert( "GET FAIL");
		},
		success: function(data){
				alert(data);
				var getItem = data;
				var html = "";
					for (var i=0, g=getItem.length; i<g; i++){
						var obj = getItem[i];
						var showUp = obj.todayDo;
						var id = obj._id;

						html += '<div data-id=\"' + id + '\"> '+showUp+'</div>\n'
					}
					$(".crudHomework").html(html);
		}
	})
})

//DELETE

$(".reset").click(function(event){
  		//$(".completeditemsul").empty();
  		// completedToDos.length = 0;	
  		//$(".completecount").html("(" + completedToDos.length + ")");


$.ajax({
	url: "http://tiy-fee-rest.herokuapp.com/collections/mike",
	type: 'DELETE',
	data: 'data',
	error: function(data){
		alert( "them's the best greens you ever flopped a lip over, ol' gal, but your DELETE still failed");
	},
	success: function(data){
		confirm("are you sure?");
			for (var i=0, d=delItem.length; d<g; i++){
						var obj = getItem[i];
						var id = obj._id;

						//html += '<div data-id=\"' + id + '\"> '+showUp+'</div>\n'
					}
					$(".crudHomework").html(html);

	}
	
})
})

});


