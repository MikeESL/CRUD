$(document).ready(function() {


	var todayDo = _.template($("#todayTmpl").html(), todayToDos);
	var tomorrowDo = _.template($("#tomorrowTmpl").html(), tomorrowToDos);
	var completedDo = _.template($("#completeTmpl").html(), completedToDos);

	
	$(".duetodayul").append(todayDo);
	$(".duetomorrowul").append(tomorrowDo);
	$(".completeditemsul").append(completedDo);





	$("#todaytodoSubmit").submit (function(e) {
	e.preventDefault();
	
	var todayTask = $(".taskToday").val();

	var todayToDosObj = {

					todayDo: todayTask
	};

	todayToDos.unshift(todayToDosObj);

	var todayTaskString = _.template($("#todayTmpl").html(), todayToDos);

	$(".taskToday").val(" ");
	$(".duetodayul").html(todayTaskString);

	
	

});

	

	//strikes through the complete task and adds it to complete array
$(".duetoday").on("click", ".finishedItem", function(){
		// var total = completedToDos.push();
		// console.log (total);
		$(this).closest("li").addClass("line");
		var completedTask = $(this).closest("li");
		$(".completedtasks").append(completedTask);
	});




	//removes the to-do
	$('.thedoer').on('click', '.removeToDo', function(){
		$(this).closest("li").remove();

	});	



});


