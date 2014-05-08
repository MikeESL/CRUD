//var todayDoTmpl = _.template($("#todayTmpl").html(), newToDoInput)
Templates  = {};

Templates.todayDoTmpl = [



    "<% _.each(newToDoInput, function(newToDoInput, index, list) { %>",

	"<li data-todayid=\"<%= newToDoInput._id %>\" data-index=\"<%= index %>\" class=\"toDoItem\"> <span class=\"glyphicon glyphicon-ok finishedItem\"></span>",
            

    "<%= newToDoInput.todayDo %>",
     "</li>",


    "<% }); %>"


    ].join("\n");   