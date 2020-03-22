var Event = {


	show_confirm: function(title, description, onclick, confirm){
		eventPanel = $('<div>').attr('id', 'event').addClass('eventPanel').css('opacity', '0');
		$('<div>').addClass('eventTitle').text(title).appendTo(eventPanel);
		$('<div>').attr('id', 'description').text(description).appendTo(eventPanel);
		$('<div>').attr({'class': 'button', 'onclick': onclick}).text(confirm).appendTo(eventPanel);
		
		$('div#wrapper').append(eventPanel);
		eventPanel.animate({opacity: 1}, 800, 'linear');},


	endEvent: function(){
		$('div#event').animate({opacity:0}, 800, 'linear', function() {
			$('div#event').remove();
			$('body').focus(); // refocus
		});
	},

}


