new Vue({
	el: '#editor',
	data: {
		input: '# hello'
	},
	filters: {
		marked: marked
	}
});


$(document).ready(function(){
	$('#trumbowyg-demo0').trumbowyg();
	$('#trumbowyg-demo1').trumbowyg();
});