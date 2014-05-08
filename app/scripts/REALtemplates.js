//integration attempt
$(document).ready(function() {
//POST inputs to server, add inputs to HTML, populate array, and count up --------
	var URL = "http://tiy-fee-rest.herokuapp.com/collections/mike";
	var todayDo = _.template($("#todayTmpl").html(), todayInput);
	//var tomorrowDo = _.template($("#tomorrowTmpl").html(), tomorrowToDos);
	var completedDo = _.template($("#completeTmpl").html(), completedToDos);


	$(".duetodayul").append(todayDo);
	//$(".duetomorrowul").append(tomorrowDo);
	$(".completeditemsul").append(completedDo);
	 //$(".duetodayleft").append(todayToDos.length + " To-Do(s) left");
	 // $(".duetomorrowleft").append(tomorrowToDos.length + " To-Do(s) left");
	 // $(".completeleft").append(completedToDos.length + " To-Do(s) complete");


//Today Submit -------------------------------------- //
	$("#todaytodoSubmit").submit (function(e) {
	e.preventDefault();

	//var todayTask = $(".taskToday").val();
	var todayInput = $(".taskToday").val();
	// var todayToDosObj = {

	// 				todayDo: todayTask
	// };
	//populate array (no longer needed) -------------------- //
	// todayToDos.push(todayToDosObj);
	// POST to server ------------------- //	
	$.ajax({
			url:"http://tiy-fee-rest.herokuapp.com/collections/mike",
			type:'POST',
			data: todayInput,
			dataType: 'JSON',
			error: function (jqXHR, status, error){
				alert ("could not add post");
			},
			success: function(data){

			}
	})

    //add to HTML ---------------------- //
	var todayTaskString = _.template($("#todayTmpl").html(), todayInput);

	$(".taskToday").val(" ");
	$(".duetodayul").html(todayTaskString);
	//$(".duetomorrowul").html(todayTaskString);

	//Count up based on number of items in array. Count down is tied to "completion event"
	//$(".todaycount").html("(" + todayToDos.length + ")");
//----------------------------------------- LATER ---------	
// $(".btnGet").click(function(event){

// 	$.ajax({
// 		url: "http://tiy-fee-rest.herokuapp.com/collections/mike",
// 		type: 'GET',
// 		data: 'data',
// 		error: function(data){
// 			alert( "GET FAIL");
// 		},
// 		success: function(data){
// 				alert(data);
// 				var getItem = data;
// 				var html = "";
// 					for (var i=0, g=getItem.length; i<g; i++){
// 						var obj = getItem[i];
// 						var showUp = obj.todayDo;
// 						var id = obj._id;

// 						html += '<div data-id=\"' + id + '\"> '+showUp+'</div>\n'
// 					}
// 					$(".crudHomework").html(html);
// 		}
// 	})
// })

	});
// End Today Submit ------------------------------------------------------//	

//	Tomorrow Submit; not needed on current version, but not taking out just yet either ---- //
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
// End Tomorrow Submit ------------------------------------------  //




//Strikes through the task, populates the array for completed items, removes items
// from array for to dos, moves lined through item to completed tab, performs a 
// DELETE from the server for the item "lined through," and counts the completed array up,
// and counts the to do array down. Whew!
	$(".thedoer").on("click", ".finishedItem", function(){
		// var total = completedToDos.push();
		$(this).closest("li").addClass("line");
		var completedTask = $(this).closest("li");
		$(".completeditemsul").append(completedTask);
		//$(".duetomorrowul").append(completedTask);
		var toRemove = $(this).closest("li").data("index");
		todayToDos.splice(toRemove, 1);
		completedToDos.unshift(completedTask);
		$(".todaycount").html("(" + todayToDos.length + ")");
		$(".completecount").html("(" + completedToDos.length + ")");
// 		$.ajax({
// 			url: "http://tiy-fee-rest.herokuapp.com/collections/mike/" + ,
// 			type: 'DELETE',
// 			error: function(jqXHR, status, error){
// 				alert( "them's the best greens you ever flopped a lip over, ol' gal, but your DELETE still failed");
// 				},
// 			success: function(data){
// 			confirm("deleted from server!");
// 			//var html = "";
// 					//html += '<div data-id=\"' + id + '\"> '+showUp+'</div>\n'
					
// 					//$(".deleteStuff").html(html);

// 			}
	
// })


	});

$(".reset").click(function(event){
  		$(".completeditemsul").empty();
  		 completedToDos.length = 0;	
  		$(".completecount").html("(" + completedToDos.length + ")");

  	});


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


});

