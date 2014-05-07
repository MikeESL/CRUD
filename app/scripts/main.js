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
	$.ajax({
		url: "http://tiy-fee-rest.herokuapp.com/collections/mike",
		type: 'GET',
		data: 'data',
		error: function(data){
			alert(FAIL);
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

//DELETE

});


