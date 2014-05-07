// // attempt to organize code

// // my data
// var todayDo = [];
// var completeDo = [];
// $ (function(){

// 	myTodoApp.init();
// });

// var myTodoApp = {
// 		init.function(){
// 			this.initStyling();
// 			this.initEvents();
// 		},
// 		initStyling: function(){
// 			// To Do template
// 			var todayDo = _.template($("#todayTmpl").html(), todayToDos);
// 			$(".duetodayul").append(todayDo);

// 		},
// 		initEvents: function(){
// 			//add a ToDo on submit and populate todayToDos array and
// 			// count up elements in the array
// 			$("#todaytodoSubmit").submit (function(e) {
// 				e.preventDefault();

// 			var todayTask = $(".taskToday").val();
// 			var todayToDosObj = {
// 				todayDo: todayTask
// 		};
// 			todayToDos.push(todayToDosObj);

// 			var todayTaskString = _.template($("#todayTmpl").html(), todayToDos);

// 			$(".taskToday").val(" ");
// 			$(".duetodayul").html(todayTaskString);
// 			$(".todaycount").html("(" + todayToDos.length + ")");
// 		});
// 		}
// 		}







// working ToDo App below, don't fuck with until the above works correctly:

$(document).ready(function() {


	var todayDo = _.template($("#todayTmpl").html(), todayToDos);
	var tomorrowDo = _.template($("#tomorrowTmpl").html(), tomorrowToDos);
	var completedDo = _.template($("#completeTmpl").html(), completedToDos);


	$(".duetodayul").append(todayDo);
	$(".duetomorrowul").append(tomorrowDo);
	$(".completeditemsul").append(completedDo);
	 //$(".duetodayleft").append(todayToDos.length + " To-Do(s) left");

	 // $(".duetomorrowleft").append(tomorrowToDos.length + " To-Do(s) left");
	 // $(".completeleft").append(completedToDos.length + " To-Do(s) complete");



	//Today Submit 
	// $("#todaytodoSubmit").submit (function(e) {
	// e.preventDefault();

	// var todayTask = $(".taskToday").val();

	// var todayToDosObj = {

	// 				todayDo: todayTask
	// };

	// todayToDos.push(todayToDosObj);

	// var todayTaskString = _.template($("#todayTmpl").html(), todayToDos);

	$(".taskToday").val(" ");
	// $(".duetodayul").html(todayTaskString);
	// $(".duetomorrowul").html(todayTaskString);

	//will count up, but not down. yet
	$(".todaycount").html("(" + todayToDos.length + ")");
	
	// var tomorrowToDosObj = {

	// 				tomorrowDo: tomorrowTask
	// };



	});

	//	Tomorrow Submit
	$("#tomorrowtodoSubmit").submit (function(e) {
	e.preventDefault();
	
	var tomorrowTask = $(".taskTomorrow").val();

	
	var tomorrowToDosObj = {

					tomorrowDo: tomorrowTask
	};

	tomorrowToDos.unshift(tomorrowToDosObj);

	var tomorrowTaskString = _.template($("#tomorrowTmpl").html(), tomorrowToDos);

	$(".taskTomorrow").val("What's your to-do for tomorrow?");
	$(".duetomorrowul").html(tomorrowTaskString);
	//$(".duetomorrowleft").html(tomorrowToDos.length + " To-Do(s) left");

	
	});





	//strikes through the complete task and adds it to complete array
	$(".thedoer").on("click", ".finishedItem", function(){
		// var total = completedToDos.push();
		// console.log (total);
		$(this).closest("li").addClass("line");
		//$(this).find("li.tomItem").addClass("line");
		var completedTask = $(this).closest("li");
		$(".completeditemsul").append(completedTask);

		//$(".duetomorrowul").append(completedTask);
		var toRemove = $(this).closest("li").data("index");
		console.log(toRemove);
		todayToDos.splice(toRemove, 1);
		completedToDos.unshift(completedTask);

		//splice tomorrowToDos in the morning here
			//$(".completeleft").html(completedToDos.length + " To-Do(s) completed");
			$(".todaycount").html("(" + todayToDos.length + ")");
			$(".completecount").html("(" + completedToDos.length + ")");

	});

// $(".reset").click(function(event){
//   		$(".completeditemsul").empty();
//   		 completedToDos.length = 0;	
//   		$(".completecount").html("(" + completedToDos.length + ")");

//   	});


	//removes the to-do
	$('.thedoer').on('click', '.removeToDo', function(){
		$(this).closest("li").remove();

	});	


var oriVal;
$(".thedoer").on('dblclick', 'li', function () {
    oriVal = $(this).text();
    $(this).text(" ");
	var toChange = $(this).closest("li").data("index");
    todayToDos.splice(toChange, 1);
    $("<input type='text'>").appendTo(this).focus();

    //delete current item from array


});
$(".thedoer").on('focusout', 'li > input', function () {
    var $this = $(this);
    $this.parent().text($this.val() || oriVal);
    $this.remove();

    var todayToDosObj = {

					todayDo: ($this.val() || oriVal)
	};
	todayToDos.unshift(todayToDosObj);

//next: compile template with new data, and then add that to mark up again
    // push or unshift then render the template
     
     // Don't just hide, remove the element.

    //add new item to array
});

//make CRUD methods

	// $.ajax({
	// 	url: "http://tiy-fee-rest.herokuapp.com/collections/",
	// 	data: data,
	// 	type: "GET",
	// 	dataType: "jsonp",
	// 	error: function (jqHXR, status, error,){
	// 		alert ("The best greens you ever flopped a lip over, ol' gal.");

	// 	},
	// 	success: function (data, dataType, jqHXR)
	// 	return 
	// })


// });

