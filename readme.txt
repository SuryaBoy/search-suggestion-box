This is a search suggestion box or table made by Surya Neupane

This project can be used in input element to provide some suggestions to user when user starts typing in the input

How to use this project/plugin

	Requirements
		jquery -> javascript library
		fuzzyset.js -> for finding the matched words, its the main engine for searching matching words, the original fuzzyset.js cloned from http://glench.github.io/fuzzyset.js/ is modified by Surya Neupane for outputing more then one matching words the modificatin done is on 		the line 185- commented an if statement 

		sug_tbl.js -> This is made by Surya Neupane which basically makes use of fuzzyset.js and provide output in an appropriate manner

		sug.css -> This is a css file for styling the suggestion table can be modified as per requirement


	Step 1 -> Download or clone the project
	Step 2 -> Include jquery.js, fuzzyset.js, sug_tbl.js and sug.css in project
	Step 3 -> Give you input element an id 
	Step 4 -> Write the Script as shown below:
			
			<script type="text/javascript">

		      $(document).ready(function () {


		        // call the mk_tbl() function from your input
		      	$('#search').mk_tbl();

		        //make an array of strings like this the strings that will be displayed in the suggestion
		        var arr_of_str = ['apple','ball','cat','dog','elephant','fox','zebra','tiger','lion','owl','yellow','green','blue','mouse','keybord','monitor','laptop','desktop','bottle','cock','pussy cat','word','god','don','finger','master','slave','psycho','social','surya','nabin','amit','ashish','bijaya','sanjaya','ash','kicker','goal','ronaldo','messi','chester','link',
		        				'ox','jack','ground','seek','sick','shit','wow','slick','egg','flower','armor','hell','heaven','dead','alive','wisdom','knowledge',
		        				'Baby Sitter'];


		        //now pass your input id and your array of strings and maximum no of suggestions you want to show in the function suggestion()
		        //default maximum suggestion no is 3

		        suggestion('#search',arr_of_str,5);

		      });

	 		</script>


	 		IN the script 
	 			First: call mk_tbl() to make suggestion table as shown above 
	 			Secont: make an array of strings
	 			Third: call the function suggestion('input id with #','array of strings','suggestion limit number');

	 Step 5 -> Suggestion table is ready. Type inside your input element and the suggestion will appear. Thank You, Have A Nice Day.

	 If there is any problem or confusion contact -> surya.neu71@gmail.com