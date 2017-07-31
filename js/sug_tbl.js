
//making a jquery function to make a table
jQuery.fn.extend({
    mk_tbl: function () {
		var $element = $(this);
		// $element.val("this is test");
		var tb_txt = $("<table id=\"search-sug-table\" class=\"sgn-tbl collapse\"></table>");
		$($element.parent()).append(tb_txt);
    }
});


//this function sends the text contained in the suggestion row to the input element
function sendText(id,to) {

    var val1 = document.getElementById(id).firstChild.firstChild.nodeValue;
    $(to).val(val1);

}


//this function takes in the input id , array of strings and max no of suggestion to be shown
function suggestion(inp_id,states,sug_lim = 3){

    //fuzzyset is the constructor from the fuzzyset.js which 
    //for more info--http://glench.github.io/fuzzyset.js/
    statesFuzzy = FuzzySet(states);
	var resultsHtml = '';
    var $elem = $(inp_id);

    $elem.keypress(function() {//on key press on the input 

        $('#search-sug-table').collapse("show")//show the suggestion table
        if ($(this).val()) {//if something has been typed in the input
            //the input type will be compared with the array of strings
            var results = statesFuzzy.get($(this).val()) || [];//most probable suggestions will be on variable results
            
            var $results = $('#search-sug-table');
            var resultsHtml = '';
            if (!results.length) {//if we have no suggestions that is no match found
                //just show some strings the we have with us 
                var loopNo = (states.length>sug_lim) ? sug_lim : states.length; 
                for (var i = 0; i < loopNo; ++i) {
                    resultsHtml +='<tr class="sgn-row" onclick="sendText(\'sgn-'+i+'\',\''+ inp_id+'\')"><td id="sgn-'+i+'" class="sgn-content"><span>'+states[i]+'</span></td></tr>\n';
                }
                $results.html(resultsHtml);
                

            } else {// if we have suggestions  that is there are some matches
                    //show the actual suggestions
                    var loopNo = (results.length>sug_lim) ? sug_lim : results.length;

                    for (var i = 0; i < loopNo; ++i) {
                        
                        // resultsHtml += '<tr class="sgn-row" onclick="sendText(\'sgn-'+i+'\',\''+inp_id+'\')"><td id="sgn-'+i+'" class="sgn-content"><span>'+results[i][1]+' value= '+results[i][0]+ ' length = '+results.length+'</span></td></tr>\n';
                        // the above code is to see the match value of the results shown with the typed text which also shows total no of matches found
                        // comment one and un comment another to see the difference
                        resultsHtml += '<tr class="sgn-row" onclick="sendText(\'sgn-'+i+'\',\''+inp_id+'\')"><td id="sgn-'+i+'" class="sgn-content"><span>'+results[i][1]+'</span></td></tr>\n';
                    }
                    $results.html(resultsHtml);
                }
        } 
    });


    // hide the suggestion table when clicked outside the table
    $elem.parents().click(function(){

        $('#search-sug-table').collapse("hide");

    });

}