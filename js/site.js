$(function(){
	/*************************************************
			CONVERT TEXT TO TAGS
	*************************************************/
	if($("#add_tag").length != 0){ //Checks if this ID is available on the page.
		$("#add_tag").keydown(function (e) { //Triggers on each key stroke.
			// The following url gives you the Keycodes for each keys in the keyboard
			// http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
			// Comma key = 188
			if(e.which === 188){
				if($(this).val() != ''){
				var newTag = '';
				newTag = '<li class="tag_done">'+$(this).val()+'<span></span></li>';
				$(this).parent('li').before(newTag);
				$(this).focus('');
				$(this).val('');
				}//END CHECKING IF INPUT HAS A VAL
			}// END CHECK IF COMMA was pressed
		});
		
		//DELETE ADDED TAGS
		$("#create_tags").on('click', 'span', function(e) {
			$(this).parent('li').remove();		
			e.preventDefault();
		});
	}
	
	// -- //END CONVERT TEXT TO TAGS 
});