//Starting over. Again. Attempting to organize code

$(document).ready(function() {

ToDos.init();

});


var ToDos = {
	init: function(){
		this.initStyling();
		this.initEvents();

	},

	initStyling: function(){
		this.renderToDos();
	},
	initEvents: function(){
		$("#todaytodoSubmit").on("submit", this.inputToDo);
		$(".duetodayul").on("click", ".finishedItem", this.removeToDo);
		$(".duetodayul").on("click", ".submitEdit", this.updateToDo);
	},

	render: function ($el, template, data) {
		var tmpl = _.template(template, data);
		$el.html(tmpl);
	},
// POST ------------------------------------ //
	inputToDo: function(e){
		e.preventDefault();

		var newToDoInput = { 
			todayDo: $(".taskToday").val(),
			};

		$.ajax({
			url:"http://tiy-fee-rest.herokuapp.com/collections/mike",
			type:'POST',
			data: newToDoInput,
			dataType: 'JSON',
			error: function (data){
				//alert ("Failed POST request");
			},
			success: function(data){
				//alert ("POST request successful");
				ToDos.renderToDos(data);
			}
	});
	},	
// end POST ---------------------------------- //	
// GET request ------------------------------- //

	renderToDos: function(){

		$.ajax({
			url: "http://tiy-fee-rest.herokuapp.com/collections/mike",
			type: 'GET',
			data: 'data',
			dataType: 'JSON',
			error: function(data){
				//alert( "Failed GET request");
			},
			success: function(data){
				//alert("GET request successful");
				var newToDoInput = window.newToDoInput = data
				ToDos.render($(".duetodayul"), Templates.todayDoTmpl, newToDoInput);

			}		
	})

},
// end GET ----------------------------- //

//RemoveToDo & DELETE request---------------- //	
	removeToDo: function(e){
		e.preventDefault();

		var $thisToDo = $(this).closest("li");
		var todayid = $thisToDo.data("todayid");
		console.log(todayid);		
		$.ajax({
			url: "http://tiy-fee-rest.herokuapp.com/collections/mike/" + todayid,
			type: "DELETE",
			error: function (data){
				//alert ("DELETE Failed");
			},
			success: function(data){
				//alert ("Delete good!");
				ToDos.renderToDos(data);

			}
		});
	},
//end Remove --------------------------- //
// Update -----------------------------//
	updateToDo: function (e){
		e.preventDefault();

		var $thisEdit = $(this).closest("li");

		var editid = $thisEdit.data("todayid");
		console.log(editid);
		var updateToDoInput = { 
			todayDo: $thisEdit.find(".taskEdit").val()
			};
		$.ajax({
			url: "http://tiy-fee-rest.herokuapp.com/collections/mike/" + editid,
			type: "PUT",
			data: updateToDoInput,
			error: function(data){
				alert("update failed");
			},
			success: function(data){
				alert("update successful");
				ToDos.render($(".duetodayul"), Templates.editToDoTmpl, updateToDoInput);
				$(".newForm").html(updateToDoInput.todayDo);
			}

		})
		

		}













};
