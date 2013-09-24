$(document).ready(function() {

	// serialize and deserialize highlights
	var highlighter;
	var hisave = $('textarea').val();

	$('#test_hide').hide();
	$('#edit_mark_1').hide();
	$('textarea').hide();


	$('#serialize-btn').click(function() {
	  var jsonStr = highlighter.serializeHighlights();
	  $('textarea').val(jsonStr);

	  $('#edit_mark_1 input[id="mark_highlight"]').val(jsonStr);
	  $('#edit_mark_1').submit();

	});

	$('#deserialize-btn').click(function() {
	  var jsonStr = $('textarea').val();
	  highlighter.deserializeHighlights(jsonStr);

	  $('textarea').val('');
	}); 




	$('#sandbox').on('click', '.highlighted', function() {
		 $('#sandbox').getHighlighter().removeHighlights(this);
  });


  $('#sandbox').textHighlighter({

      onBeforeHighlight: function(range) {
          return confirm('Do you really want to highlight this text: "' + range + '"?');
      },
      onAfterHighlight: function(highlights, range) {
          alert('You have selected "' + range + '" and created ' + highlights.length + ' highlight(s)!');
      }
  });


	highlighter = $('#sandbox').getHighlighter();

	highlighter.deserializeHighlights(hisave);

	// set up highlight color
	$('#color-picker div.color').click(function() {
		var color = $(this).css('background-color');
		$('#sandbox').getHighlighter().setColor(color);
	});


});

