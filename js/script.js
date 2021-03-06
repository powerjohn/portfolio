(function(){

	var descBody={ beauty:"Responsive front end website developed for start-up beautician\n"+
	"Technologies used HTML5, CSS3, jQuery, javaScript, bootstrap",
	 sorting : "Web app that animates various simple algorithms for mainpulating the elements of an array\n"+
	 "Technologies used: HTML5, CSS3, Javascript JQuery",
	  quote: "A simple app that generates a random quote from an array and allows the user to tweet a quote\n"+
	  "Technologies used: HTML5, CSS3, jQuery, twitterAPI",
	   calc : "A simple app that displays a fully functional calculator\n"+
	   "Technologies used: HTML5, CSS3, jQuery, javascript",
	   wiki : "A simple app that allows the user to enter a search and returns a list of matching results from wikipedia\n"+
	   "Technologies used: HTML5, CSS3, jQuery, jQueryUI, wikimediaAPI",
	   clock: "A responsive applicatiojn that allows the user to set the duration of a work session followed by the "+
	   "duration of a break period. The clock counts down the session time then the break time repeatedly."+
	   " The user has the option to reset to the default settings or choose a custom setting. Technologies used:"+
	   "HTML5 CSS3 Bootstrap jQuery Javascript",
	   malena: "A fansite for the movie Malena Technologies used HTML5 CSS3",
	news: "An application that uses ajax to update and display posts in Free Code Camp News"+
	   "Technologies used javascript jquery HTML5 CSS3 "};
	
	$('.descButton').on('click', function(){
		var $this = $(this),
				    desc = $this.data('file');	    

		$('<div></div', {
			id: desc+"Modal",
			class: "modal fade"
		}).insertAfter('.' + desc);
		$('<div></div>',{
			class: "modal-dialog"
		}).appendTo('#'+desc+'Modal');
		$('<div></div>',{
			class: "modal-content"
		}).appendTo('.modal-dialog');
		$('<div></div>',{
			class: "modal-header"
		}).appendTo('.modal-content');
		$('.modal-header').append('<button type=\"button\" class=\"close\" data-dismiss = \"modal\"'+
			'aria-hidden=\"true\">&times;</button>');
		$('<h4></h4>',{
			class: "modal-title",
			text: desc.toUpperCase()
		}).insertAfter('button.close');
		$('<div></div>',{
			class: "modal-body"
		}).insertAfter('.modal-header');
		$('<p></p>',{
			text: descBody[desc]
		}).appendTo('.modal-body');



		$('#'+desc+'Modal').modal('show');
	
	});

	
})();


