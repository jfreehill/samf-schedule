var artistList;

$.getJSON('data/schedule.json', function(data){
	scheduleData = data;
	console.log(scheduleData);
	renderData();
});

function renderData () {

		//console.log(scheduleData[i]);
		var artists = ich.artistTemplate(scheduleData);
		console.log(artists);
		$('#artists ul').append(artists);

	//initList();
}

function initList() {
	var options = {
		valueNames: ['name', 'day', 'stage', 'start-time', 'end-time'],
	};

	artistList = new List('artists', options);
}