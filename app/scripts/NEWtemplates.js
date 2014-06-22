//var todayDoTmpl = _.template($("#todayTmpl").html(), newToDoInput)
Templates  = {};

Templates.todayDoTmpl = [



    "<% _.each(newToDoInput, function(newToDoInput, index, list) { %>",

	"<li data-todayid=\"<%= newToDoInput._id %>\" data-index=\"<%= index %>\" class=\"toDoItem\"><div class=\"newCheck\"><span class=\"glyphicon glyphicon-remove finishedItem\"></span></div>",
            
	//"<li data-todayid=\"<%= newToDoInput._id %>\" data-index=\"<%= index %>\" class=\"toDoItem\"> <span class=\"glyphicon glyphicon-remove finishedItem\"></span><span class=\"glyphicon glyphicon-pencil editStuff\" data-toggle=\"modal\" data-target=\".bs-example-modal-sm\"></span>",

    "<%= newToDoInput.todayDo %>",
     "</li>",


    "<% }); %>"


    ].join("\n");

 // Templates.editToDoTmpl = [

 // 	"<% _.each(updateToDoInput, function(updateToDoInput, index, list) { %>",

	// "<li data-todayid=\"<%= newToDoInput._id %>\" data-index=\"<%= index %>\" class=\"toDoItem\"><div class=\"newForm\"> <form action= \"\" id=\"editSubmit\"><input type=\"text\" placeholder=\"update\" class=\"taskEdit\"><button type=\"submit\" class=\"submitEdit\">Update</button></form></div><div class=\"newCheck\"><span class=\"glyphicon glyphicon-remove finishedItem\"></span></div>",
	// //"<li data-todayid=\"<%= updateToDoInput._id %>\" data-index=\"<%= index %>\" class=\"toDoItem\"> <form action= \"\" id=\"editSubmit\"><input type=\"text\" placeholder=\"update\" class=\"taskEdit\"><button type=\"submit\" class=\"submitEdit\">Update</button></form><span class=\"glyphicon glyphicon-remove finishedItem\"></span>",
            

 //    "<%= updateToDoInput.todayDo %>",
 //     "</li>",


 //    "<% }); %>"





 // ].join("\n");    