$(document).ready(function()
{

	function printToPage (msg)
	{
		var message = "<p>" + msg + "<\p>";
		$("#mainSection").append (message);
	}

	// list of quiz scores
	var scores = [46, 41, 34, 33, 30, 30, 28, 27, 25, 21];

	printToPage("Initial Array before BubbleSort " + scores);

	var scoreLength  = scores.length;

	console.log(scoreLength);

	function bubbleSort(scores){
		var swapped = false;

		//Goes through the loop to make sure that all the numbees are sorted
		for(var k = 0 ;k <scoreLength ;k++)
		{
			//Specific position in array in order to keep moving forward to the next set of numbers
			for(var j = 0 ;j < (scoreLength - k -1) ;j++)
			{
				//Compares the set of numbers 
				if (scores[j]>scores[j+1])
				{
					//swapping the set if the initial number is greater than the following
					var tmp = scores[j+1]; // creates a temporaly variable to store the number swapped
					scores[j+1] = scores[j];
					scores[j] = tmp;
				}
				
			}
		}
		return scores; //return array if completely swapped		
	}

	console.log(bubbleSort(scores));
	
	bubbleSort(scores);
	

	printToPage ("After BubbleSort the scores " +  bubbleSort(scores));

});