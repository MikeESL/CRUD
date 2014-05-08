// $(document).ready(function() {
// //POST inputs to server, add inputs to HTML, populate array, and count up
// 	var URL = "http://tiy-fee-rest.herokuapp.com/collections/mike";

// 	var todayDo = _.template($("#todayTmpl").html(), todayToDos);
// // to do submit
// 	$("#todaytodoSubmit").submit (function(e) {
// 	e.preventDefault();

// 	var todayTask = $(".taskToday").val();

// 	var todayToDosObj = {

// 					todayDo: todayTask
// 	};

// //push into array
// 	todayToDos.push(todayToDosObj);
// // POST to server	
// 	$.post(URL, todayToDosObj);
// // add to HTML
// 	var todayTaskString = _.template($("#todayTmpl").html(), todayToDos);
// 	$(".duetodayul").append(todayDo);
// // count up as array populates


// });
// //GET	
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

// //DELETE

// $(".reset").click(function(event){
//   		$(".completeditemsul").empty();
//   		completedToDos.length = 0;	
//   		$(".completecount").html("(" + completedToDos.length + ")");


// $.ajax({
// 	url: "http://tiy-fee-rest.herokuapp.com/collections/mike/5369a7b0dd635e020000006a",
// 	type: 'DELETE',
// 	error: function(jqXHR, status, error){
// 		alert( "them's the best greens you ever flopped a lip over, ol' gal, but your DELETE still failed");
// 	},
// 	success: function(data){
// 		confirm("are you sure?");
// 		//var html = "";
// 					//html += '<div data-id=\"' + id + '\"> '+showUp+'</div>\n'
					
// 					$(".deleteStuff").html(html);

// 	}
	
// })
// })


// //UPDATE
// $(".updateStuff").click(function(event){
// 	event.preventDefault();

// 	var updateUpdate = $(".taskUpdate").val();

// $.ajax({
// 	url: "http://tiy-fee-rest.herokuapp.com/collections/mike/53698513dd635e0200000040",
// 	type: "PUT",
// 	data: updateUpdate,
// 	error: function (jqXHR, status, error){
// 		alert ("error update: sleep all day cause I'm up all goddamn night" + error);
// 		},
// 		success: function(data, dataType, jqXHR){
// 			todayToDos.push(updateUpdate);
			
			
// 			//var html = "";




// 		}
// })
// })
// });


