document.getElementById("quizForm").addEventListener("submit", function(e){

    e.preventDefault();


    let score = 0;

    let results = "";


// Question 1

    let q1 = document.getElementById("q1").value.toLowerCase();

    if(q1 === "arpanet"){

        score++;

        results += "<p class='correct'>Q1 Correct - Answer: ARPANET</p>";

    }

    else{

        results += "<p class='incorrect'>Q1 Incorrect - Answer: ARPANET</p>";

    }




// Question 2

    let q2 = document.querySelector('input[name="q2"]:checked');

    if(q2 && q2.value === "TCP/IP"){

        score++;

        results += "<p class='correct'>Q2 Correct - Answer: TCP/IP</p>";

    }

    else{

        results += "<p class='incorrect'>Q2 Incorrect - Answer: TCP/IP</p>";

    }





// Question 3

    let q3 = document.querySelector('input[name="q3"]:checked');


    if(q3 && q3.value === "Tim Berners-Lee"){

        score++;

        results += "<p class='correct'>Q3 Correct - Answer: Tim Berners-Lee</p>";

    }

    else{

        results += "<p class='incorrect'>Q3 Incorrect - Answer: Tim Berners-Lee</p>";

    }





// Question 4

    let q4 = document.querySelector('input[name="q4"]:checked');


    if(q4 && q4.value === "HTML"){

        score++;

        results += "<p class='correct'>Q4 Correct - Answer: HTML</p>";

    }

    else{

        results += "<p class='incorrect'>Q4 Incorrect - Answer: HTML</p>";

    }




// Question 5

    let q5 = [...document.querySelectorAll('input[name="q5"]:checked')]
        .map(x=>x.value);


    let correct = ["HTML","CSS","JavaScript"];


    if(
        q5.length === 3 &&
        correct.every(x=>q5.includes(x))
    ){

        score++;

        results += "<p class='correct'>Q5 Correct - Answers: HTML, CSS, JavaScript</p>";

    }

    else{

        results += "<p class='incorrect'>Q5 Incorrect - Answers: HTML, CSS, JavaScript</p>";

    }



    let result = "";

    if(score >=3){

        result="<h2 class='pass'>PASS</h2>";

    }

    else{

        result="<h2 class='fail'>FAIL</h2>";

    }



    document.getElementById("results").innerHTML =

        result +

        "<h2>Total Score: "+score+"/5</h2>" +

        results;


});



document.getElementById("quizForm").addEventListener("reset",function(){

    document.getElementById("results").innerHTML="";

});