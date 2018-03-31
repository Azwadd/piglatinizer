// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW
function vowel(test){
	var output = test + 'yay';
	return output;
}
function wordToPigLatin(test){
	var output = test.slice(1) + test[0] + 'ay';
	return output;
}
function sentenceToPigLatin(value){
    var value = $('#userValue').val();
	var user = value.split(' ');
	for (var i = 0; i <= user.length - 1; i = i + 1) {
	    var word = user[i];
	    if (word[0].toLowerCase() === 'a' || word.toLowerCase() === 'e' || word[0].toLowerCase() === 'i' 
	    || word[0].toLowerCase() === 'o' || word[0].toLowerCase() === 'u') {
	   $('#result').append(vowel(word) + ' ');
	   } else {
	   $('#result').append(wordToPigLatin(word) + ' ');
	      }  	       
    }
}

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	$("#click").click(function(e){
		e.preventDefault();
			var value = $('#userValue').val();
			$('#result').text(sentenceToPigLatin(value));
	});
	$('#clear').click(function(e){
		e.preventDefault();
		$('#result').text(' ')
	});
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance