$(document).ready(function(){

$("form#questions").submit(function(event) {
  var hairColor = $("select#hairColor").val();
  var gender = $("select#gender").val();

 if (hairColor === 'Blonde' && gender === 'Male') {
  $('#celeb1').show();
} else if (hairColor === 'Blonde' && gender === 'Female') {
  $('#celeb2').show();
} else if (hairColor === 'Brown' && gender === 'Male') {
  $('#celeb3').show();
} else if (hairColor === 'Brown' && gender === 'Female') {
  $('#celeb4').show();
} else if (hairColor === 'Red' && gender === 'Male') {
  $('#celeb5').show();
}  else {
    $('#celeb6').show();
  }
  $('#questions').hide();
 event.preventDefault();
});

});
