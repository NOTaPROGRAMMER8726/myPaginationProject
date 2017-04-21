const $studentsList = $("li.student-item");                                                                         //skype: top-gambler
const $totalStudents = $studentsList.length; //length of total list of students in html
const $studentsPerPage = 10; //items per page i wanna show
const $pages = Math.ceil($totalStudents / $studentsPerPage); //how many pages will be needed
$(".page-header").append("<h4>"); //create span in page header and add text in span
const $spanText = $(".page-header h4").text("STUDENTS 1-10 OUT OF " + $totalStudents)
//created input and button with ids
$(".student-search").append('<input id="userInput" type="text" placeholder="Search for Students...">').append("<button id='searchButton'>Search</button>");
$($studentsList).hide().slice(0, $studentsPerPage).show(); //when loading page, show only first 10 names
$("div.pagination").append("<ul>"); //add ul tag to div to create li containing a for pages
//for loop creating <li> with <a> tags for the <ul>
for(var i = 0; i < $pages; i++){
        $("div.pagination ul").append("<li><a href='#'>" + (i + 1) + "</a>");
    };

//created text for when no student is matched in search.
$("#noStudent").append('<h4>Sorry, There are no students by that name.</h4>');
$("#noStudent h4").hide(); //hide the previously created text for no students. dont need that yet.

$($studentsList).hide().slice(0, $studentsPerPage).show();//and show first 10 student list

$(".pagination ul li a").first().addClass('active'); //add active class to the first <a> in the .pagination class, so its highlighted.
//event listener for the pagination.
$(".pagination ul li a").on("click", function(){
$(".active").removeClass(); //first remove .active class
let index = $(".pagination ul li a").index(this); //get index of li a array.
$($studentsList).hide().slice(($studentsPerPage * index), ($studentsPerPage * (index + 1))).show(); //hide students, then slice the arrays and multiple $studentsPerPage you want shown.
$(this).addClass('active'); //add .active class to the link that was clicked.
$($spanText).text('STUDENTS ' + ($studentsPerPage * index + 1) + '-' + ($studentsPerPage * (index + 1)) + ' OUT OF ' + $totalStudents);//new text
    if(($(this).index("a") * $studentsPerPage) > $totalStudents){ //if the about of items listed on page is greater than total amount of items
        $($spanText).text('STUDENTS ' + ($studentsPerPage * index + 1) + '-' + $totalStudents + ' OUT OF ' + $totalStudents) //give this text instead
    };
});

var $studentName;

$("#searchButton").on("click", function() { //added an id on the button just to make it easier, added a click event.
    $($spanText).hide(); //hide text
    $("#noStudent h4").show(); //show "no students" text. itll be removed accordingly.
    $($studentsList).show(); //first, show ALL the student list that was hidden from when the page loaded.
    let $filteredUserInput = $("#userInput").val().toUpperCase(); //variable containing the value of the usersinput(also, created an id) made the input uppercase.
        for(let i = 0; i < $studentsList.length; i++){ //forloop to cycle through list.
            $studentName = $("h3")[i].innerHTML.toUpperCase(); //variable containing the students name which is in h3
            //if indexOf studentName is LESS than 0(-1) or user input = " "(just space and nothing else) or if the visible .student-items = 0.
            if($studentName.indexOf($filteredUserInput) < 0 ||  $filteredUserInput == " " || $(".student-item:visible").length == 0) {
               $(".pagination").hide(); //hide .pagination links
               $($studentsList[i]).hide(); //and students.
           }
            else if ($studentName.indexOf($filteredUserInput) > -1){ //else if index of studentName is greater than -1(meaning there was a match)
                $($studentsList[i]).show(); //show students that were matched
                $("#noStudent h4").hide(); //hide "no student" text.
            }
        }
        const $visibleStudents = $(".student-item:visible"); //create a const to permently hold the visible students
        const $lengthOfVisibleStudents = $($visibleStudents).length; //and length(number of however many are visble)
        $($spanText).text("STUDENTS 1- " + $studentsPerPage + " OF " + $lengthOfVisibleStudents + " FOUND").show(); //show new text.
                if($lengthOfVisibleStudents <= $studentsPerPage) { //if length of visble student-items is less than or equal to about of students per page(this case being 10)
                    $($spanText).text("STUDENTS 1- " + $lengthOfVisibleStudents + " OF " + $lengthOfVisibleStudents + " FOUND").show(); //give this msg instead
                }
            if ($filteredUserInput.length == 0){ //if the length of the userInput lessthan equal 0(meaning if the search was clicked with nothing on input..)
                $($studentsList).hide().slice(0, $studentsPerPage).show();
                $(".active").removeClass();
                $(".pagination ul li a").first().addClass('active');
                $("#noStudent h4").hide();
                $(".pagination").show();
                $($spanText).text("STUDENTS 1-10 OUT OF " + $totalStudents).show();
            }
            if($lengthOfVisibleStudents == 0){ //if lengthOfVisibleStudents is 0(no students displayed)
                    $($spanText).hide(); //hide the text with how many students are showing.
                }else if($lengthOfVisibleStudents > $studentsPerPage){ //if number of visibleStudents is greater than students
                    $(".pagination").show(); //show pages
                     $("div.pagination ul li").remove(); //remove li, so that it can be added accordingly with for loop
                     const $newPages = Math.ceil($lengthOfVisibleStudents / $studentsPerPage); //number of new pages to create
                     for(var i = 0; i < $newPages; i++){
                             $("div.pagination ul").append("<li><a href='#'>" + (i + 1) + "</a>");
                         };
                        $($visibleStudents).hide().slice(0, $studentsPerPage).show(); //do similar func as above..
                    $(".pagination ul li a").first().addClass('active');
                         $(".pagination ul li a").on("click", function(){
                         $(".active").removeClass();
                         let index = $(".pagination ul li a").index(this); //get index of li a array.
                         $($visibleStudents).hide().slice(($studentsPerPage * index), ($studentsPerPage * (index + 1))).show(); //hide students, then slice the arrays and multiple $studentsPerPage you want shown.
                     $(this).addClass('active'); //add .active class to the link that was clicked.
                     $($visibleStudents).hide().slice(($studentsPerPage * index), ($studentsPerPage * (index + 1))).show(); //hide students, then slice the arrays and multiple $studentsPerPage you want shown.
                     $($spanText).text('STUDENTS ' + ($studentsPerPage * index + 1) + '-' + ($studentsPerPage * (index + 1)) + ' OUT OF ' + $lengthOfVisibleStudents + " FOUND");//new text
                         if (($(this).index("a") * $studentsPerPage) > $lengthOfVisibleStudents || (($(this).index("a") + 1) * $lengthOfVisibleStudents) > $visibleStudents){
                            $($spanText).text('STUDENTS ' + ($studentsPerPage * index + 1) + '-' + $lengthOfVisibleStudents + ' OUT OF ' + $lengthOfVisibleStudents + " FOUND");
                        }
                        else if ($filteredUserInput.length == 0){
                            $($spanText).text('STUDENTS ' + ($studentsPerPage * index + 1) + '-' + ($studentsPerPage * (index + 1)) + ' OUT OF ' + $lengthOfVisibleStudents);
                        }
                 })
             }
});
