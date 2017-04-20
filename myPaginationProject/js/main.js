
//variable with the student-items in the student-list class value..
const $studentsList = $("li.student-item");
//function to show 10 students per page.
const paginationFunction = ()=> {
    $(".pagination ul li a").on("click", function(){
    let index = $(".pagination ul li a").index(this); //sets index of the li u clicking.. ex. click on the 3rd li returns 2.
    $("a").removeClass("active"); //remove "active" class so its not highlighted
    $($studentsList).hide().slice(10 * index,10 * (index + 1)).show();//hide all studentsList in page. then slice the arrays.. and multiple by 10 to get 10 items at a time.
    $(this).addClass('active');//add class back into that clicked anchor tag
});
};

$("#searchButton").on("click", function() { //added an id on the button just to make it easier, added a click event.
    $("#noStudent h4").hide(); //hide the "Sorry, there is no student by that name."
    $($studentsList).show(); //first, show ALL the student list that was hidden from when the page loaded.
    let $filteredUserInput = $("#userInput").val().toUpperCase(); //variable containing the value of the usersinput(also, created an id) made the input uppercase.
        for(let i = 0; i < $studentsList.length; i++){ //forloop to cycle through list.
            let $studentName = $("h3")[i].innerHTML.toUpperCase(); //variable containing the students name which is in h3
                if($studentName.indexOf($filteredUserInput) < 0 ||  $filteredUserInput == " ") { //if the studentName value has an index of userInput less than 0(-1)
                    $(".pagination").hide(); //remove the .pagination                         // that means there was NO match. or if the userinput is just spaces.
                    $($studentsList[i]).hide(); //hide the students that didnt match.
                        if ($(".student-item:visible").length == 0){ // if visible items on page == 0;
                            $("#noStudent h4").show();               //show the "Sorry, there is no student by that name." message
                        };
                    } else if ($studentName.indexOf($filteredUserInput) > 0){ //if the studentName value has an index of userInput greater than 0,
                    $($studentsList[i]).show();                                  // that means there WAS a match and it'll show that student or students
                } else if ($filteredUserInput.length == 0){
                    paginationFunction();
                    $($studentsList).hide().slice(0, 10).show();
                    $("#noStudent h4").hide();
                };
            };

});

$($studentsList).hide().slice(0,10).show();//load only first 10 items when page loads.
paginationFunction();//start paginationFunction on load.
$("#noStudent h4").hide();//added text on html "Sorry, there is no student by that name." Which I want displayed only when a student name isnt found..
