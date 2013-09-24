// $(function () {
//	$('.edit_task input[type=submit]').remove()
//	$('.edit_task input[type=checkbox]').click(function () {
//		$(this).parent('form').submit();
//	});
// });

$(function() {

  $('.edit_task').submitOnCheck();

});

jQuery.fn.submitOnCheck = function () {
	this.find('input[type=submit]').remove();
	this.find('input[type=checkbox]').click(function () {
		$(this).parent('form').submit();
	});
	return this;
};