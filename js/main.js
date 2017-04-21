const $studentsList = $("li.student-item");
const $totalStudents = $studentsList.length;
const $studentsPerPage = 10;
const $pages = Math.ceil($totalStudents / $studentsPerPage);
$(".page-header").append("<h4>");
const $spanText = $(".page-header h4").text("STUDENTS 1-10 OUT OF " + $totalStudents)

$(".student-search").append('<input id="userInput" type="text" placeholder="Search for Students...">').append("<button id='searchButton'>Search</button>");
$($studentsList).hide().slice(0, $studentsPerPage).show();
$("div.pagination").append("<ul>");

for(var i = 0; i < $pages; i++){
        $("div.pagination ul").append("<li><a href='#'>" + (i + 1) + "</a>");
    };


$("#noStudent").append('<h4>Sorry, There are no students by that name.</h4>');
$("#noStudent h4").hide();

$($studentsList).hide().slice(0, $studentsPerPage).show();

$(".pagination ul li a").first().addClass('active');

$(".pagination ul li a").on("click", function(){
$(".active").removeClass();
let index = $(".pagination ul li a").index(this);
$($studentsList).hide().slice(($studentsPerPage * index), ($studentsPerPage * (index + 1))).show();
$(this).addClass('active');
$($spanText).text('STUDENTS ' + ($studentsPerPage * index + 1) + '-' + ($studentsPerPage * (index + 1)) + ' OUT OF ' + $totalStudents);
    if(($(this).index("a") * $studentsPerPage) > $totalStudents){
        $($spanText).text('STUDENTS ' + ($studentsPerPage * index + 1) + '-' + $totalStudents + ' OUT OF ' + $totalStudents)
    };
});

var $studentName;

$("#searchButton").on("click", function() {
    $($spanText).hide();
    $("#noStudent h4").show();
    $($studentsList).show();
    let $filteredUserInput = $("#userInput").val().toUpperCase();
        for(let i = 0; i < $studentsList.length; i++){
            $studentName = $("h3")[i].innerHTML.toUpperCase();

            if($studentName.indexOf($filteredUserInput) < 0 ||  $filteredUserInput == " " || $(".student-item:visible").length == 0) {
               $(".pagination").hide();
               $($studentsList[i]).hide();
           }
            else if ($studentName.indexOf($filteredUserInput) > -1){
                $($studentsList[i]).show();
                $("#noStudent h4").hide();
            }
        }
        const $visibleStudents = $(".student-item:visible");
        const $lengthOfVisibleStudents = $($visibleStudents).length;
        $($spanText).text("STUDENTS 1- " + $studentsPerPage + " OF " + $lengthOfVisibleStudents + " FOUND").show();
                if($lengthOfVisibleStudents <= $studentsPerPage) {
                    $($spanText).text("STUDENTS 1- " + $lengthOfVisibleStudents + " OF " + $lengthOfVisibleStudents + " FOUND").show();
                }
            if ($filteredUserInput.length == 0){
                $($studentsList).hide().slice(0, $studentsPerPage).show();
                $(".active").removeClass();
                $(".pagination ul li a").first().addClass('active');
                $("#noStudent h4").hide();
                $(".pagination").show();
                $($spanText).text("STUDENTS 1-10 OUT OF " + $totalStudents).show();
            }
            if($lengthOfVisibleStudents == 0){
                    $($spanText).hide();
                }else if($lengthOfVisibleStudents > $studentsPerPage){
                    $(".pagination").show();
                     $("div.pagination ul li").remove();
                     const $newPages = Math.ceil($lengthOfVisibleStudents / $studentsPerPage);
                     for(var i = 0; i < $newPages; i++){
                             $("div.pagination ul").append("<li><a href='#'>" + (i + 1) + "</a>");
                         };
                        $($visibleStudents).hide().slice(0, $studentsPerPage).show();
                    $(".pagination ul li a").first().addClass('active');
                         $(".pagination ul li a").on("click", function(){
                         $(".active").removeClass();
                         let index = $(".pagination ul li a").index(this);
                         $($visibleStudents).hide().slice(($studentsPerPage * index), ($studentsPerPage * (index + 1))).show();
                          $(this).addClass('active');
                     $($visibleStudents).hide().slice(($studentsPerPage * index), ($studentsPerPage * (index + 1))).show();
                     $($spanText).text('STUDENTS ' + ($studentsPerPage * index + 1) + '-' + ($studentsPerPage * (index + 1)) + ' OUT OF ' + $lengthOfVisibleStudents + " FOUND");
                         if (($(this).index("a") * $studentsPerPage) > $lengthOfVisibleStudents || (($(this).index("a") + 1) * $lengthOfVisibleStudents) > $visibleStudents){
                            $($spanText).text('STUDENTS ' + ($studentsPerPage * index + 1) + '-' + $lengthOfVisibleStudents + ' OUT OF ' + $lengthOfVisibleStudents + " FOUND");
                        }
                        else if ($filteredUserInput.length == 0){
                            $($spanText).text('STUDENTS ' + ($studentsPerPage * index + 1) + '-' + ($studentsPerPage * (index + 1)) + ' OUT OF ' + $lengthOfVisibleStudents);
                        }
                 })
             }
});
