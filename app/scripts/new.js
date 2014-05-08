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
// DELETE request ----------------------- //
	
	removeToDo: function(e){
		e.preventDefault();

		var $thisToDo = $(this).closest("li");
		console.log($thisToDo);
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

		
		
	}











};
