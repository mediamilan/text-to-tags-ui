$(function(){
	/*************************************************
			CONVERT TEXT TO TAGS
	*************************************************/
	if($("#add_tag").length != 0){
		$("#add_tag").keydown(function (e) {
			if(e.which === 188){
				if($(this).val() != ''){
				var newTag = '';
				newTag = '<li class="tag_done">'+$(this).val()+'<span></span></li>';
				$('#add_tag').parent('li').before(newTag);
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