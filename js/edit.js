/*new Vue({
	el: '#editor',
	data: {
		input: '# hello'
	},
	filters: {
		marked: marked
	}
});*/

$(function() {
	$('.date-picker').datepicker( {
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		dateFormat: 'MM yy',
		onClose: function(dateText, inst) { 
			var month = $(".ui-datepicker-month :selected").val();
			var year = $(".ui-datepicker-year :selected").val();
			$(this).datepicker('setDate', new Date(year, month, 1));
		}
	});
});


$(function(){
	$('#trumbowyg-demo0').trumbowyg();
});



