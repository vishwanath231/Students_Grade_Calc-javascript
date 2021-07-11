
// FORM SUBMIT
var form = document.getElementById("marks");
form.addEventListener("submit",displayPercentage);

function displayPercentage(e){
e.preventDefault();

    // INDIVIDUAL INPUTS
    var tamil = document.getElementById("tamil").value;
    var english = document.getElementById("english").value;
    var maths = document.getElementById("maths").value;
    var science = document.getElementById("science").value;
    var social = document.getElementById("social").value;

    // CHECK VALIDATION 
    if (tamil == "" && english == "" && maths == "" && science =="" && social == "") {
        alert("All fields required")
    }else{

        // TAMIL
        if (tamil == "") {
            alert("Tamil fields required");
        }else{
            if (tamil <= 35) {
                document.getElementById("tPass").innerHTML= "Fail";
                document.getElementById("tPass").style.color = "red";
            }else{
                document.getElementById("tPass").innerHTML = "Pass";
                document.getElementById("tPass").style.color = "green";
            }
        }

        // ENGLISH
        if (english == "") {
            alert("English fields required");
        }else{
            if (english <= 35) {
                document.getElementById("ePass").innerHTML= "Fail";
                document.getElementById("ePass").style.color = "red";
            }else{
                document.getElementById("ePass").innerHTML = "Pass";
                document.getElementById("ePass").style.color = "green";
            }
        }

        // MATHS
        if (maths == "") {
            alert("Maths fields required");
        }else{
            if (maths <= 35) {
                document.getElementById("mPass").innerHTML= "Fail";
                document.getElementById("mPass").style.color = "red";
            }else{
                document.getElementById("mPass").innerHTML = "Pass";
                document.getElementById("mPass").style.color = "green";
            }
        }

        // SCIENCE
        if (science == "") {
            alert("Science fields required");
        }else{
            if (science <= 35) {
                document.getElementById("scPass").innerHTML= "Fail";
                document.getElementById("scPass").style.color = "red";
            }else{
                document.getElementById("scPass").innerHTML = "Pass";
                document.getElementById("scPass").style.color = "green";
            }
        }

        // SOCIAL
        if (social == "") {
            alert("Social fields required");
        }else{
            if (social <= 35) {
                document.getElementById("soPass").innerHTML= "Fail";
                document.getElementById("soPass").style.color = "red";
            }else{
                document.getElementById("soPass").innerHTML = "Pass";
                document.getElementById("soPass").style.color = "green";
            }
        }


        // TOTAL
        var total = parseFloat(tamil)+parseFloat(english)+parseFloat(maths)+parseFloat(science)+parseFloat(social);


        // PERCENTAGE
        let per = (total/500) * 100;


        // GRADE
        if (per <= 100 && per >= 80) {
            grades = 'A'
        }else if (per <= 79 && per >= 60){
            grades = 'B'
        }else if (per <= 59 && per >= 40) {
            grades = 'C'
        }else{
            grades = 'F'
        }
        

        // DISPLAY THE RESULTS WITH BACKGROUND
        document.getElementById("output").innerHTML = `
            Out of 500 your total is <span class="total">${total}</span> and percentage is <span class="perc"> ${per}% </span>, 
            your grade is <span class="grade"> ${grades}</span>
        ` ;
        document.getElementById("output").style.background = "rgb(247, 247, 247)"
    }
}


function refreshPage(){
    location.reload();
    document.getElementById("marks").reset();
}