
var artistList, 
	scheduleData;
var artistTemplate;// = "{{=it.artists :value:index}}<li class='artist'><h3 class='name'>{{=value.name}}</h3> <p><b>Day</b> <span class='day'>{{=value.day}}</span></p><p><b>Stage</b> <span class='stage'>{{=value.stage}}</span></p><p><b>Time</b> <span class='start-time'>{{=value.start_time}}</span>-<span class='end-time'>{{=value.end_time}}</span></p></li>{{~}}";

$.getJSON('data/schedule.json', function(data){
	scheduleData = data;
	console.log(scheduleData);
	renderData();
});

function renderData () {
	var artistTemplate = doT.template(document.getElementById('artistTemplate').text);
	var artistsRender = artistTemplate(scheduleData);
	$('#artists ul').html(artistsRender);
	viewRender();
}

function viewRender () {
	var days = ["Friday","Saturday", "Sunday"];

	$('.day').each(function(){
		var d = parseInt($(this).text()) - 1;
		$(this).text(days[d]);
	}); 

	$('.start-time, .end-time').each(function(){
		var time = $(this).text();
		var hour = time.split(":")[0];
		var minutes = time.split(":")[1];
		hour = (hour > 12) ? hour - 12 : hour;
		$(this).text(hour+":"+minutes);	
	})

	initList();
}


function initList () {
	var options = {
		valueNames: ['name', 'day', 'stage', 'start-time', 'end-time'],
	};
	artistList = new List('artists', options);
}