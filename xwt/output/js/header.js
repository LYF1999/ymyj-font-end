$('header ul').on('mouseover','li',function(){
	$(this).find('em').addClass('wi1');
});
$('header ul').on('mouseout','li',function(){
	$(this).find('em').removeClass('wi1');
});