$(document).ready(function() {
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

})
});