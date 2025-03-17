// welcome calling
    let username=localStorage.getItem('USERNAME')
    console.log(username);
    head1.innerHTML=`Welcome ${username} !!`

// action on image of gender
    let userage=localStorage.getItem('USERAGE')
    console.log(userage);
    age1.innerHTML=`${userage}`
// calculation details
   
// function calculation
function bmiCalculation(){
    let uweight=parseInt(document.getElementById('weight').value )
    console.log(uweight);
    let uheight=document.getElementById('height').value
    console.log(uheight);



    if (uheight === "" || uweight === "") {
        alert("Please fill all the fields");
    }
    else{
        var bmi = uweight / ((uheight * uheight)/10000);
        console.log(bmi);
        
        document.getElementById("result-value").textContent = `Your BMI is: ${bmi.toFixed(2)} Kg/m²`;
        // localStorage.setItem('BMI-Value',bmi)

        if(bmi <18.5){
           document.getElementById("arrow").style.transform="rotate(-180deg)"
           document.getElementById('img-change').src="images/under-weight.png"
        }
        else if (bmi >18.5 && bmi <25)
        {
            document.getElementById("arrow").style.transform="rotate(-134deg)"
            document.getElementById('img-change').src="images/normal.png"

        }
        else if (bmi >25 && bmi <30)
        {
            document.getElementById("arrow").style.transform="rotate(-90deg)"
            document.getElementById('img-change').src="images/over.png"

        }
        else if (bmi >30 && bmi <35)
        {
            document.getElementById("arrow").style.transform="rotate(-45deg)"
            document.getElementById('img-change').src="images/obese.png"

        }
        else {
            document.getElementById('img-change').src="images/extreem.png"
            document.getElementById("arrow").style.transform="rotate(-9deg)"


        }
    }
}

// function of goback button
 function goback(){
    window.location="./login.html"
    
 }
//  function reset
function resetAll() {
    document.getElementById('weight').value = ""; // Clear the weight input
    document.getElementById('height').value = ""; // Clear the height input
  
      //Optional: reset any displayed results
      document.getElementById('result-value').innerHTML="Your BMI is"; //clear the result div.
  }


// hidden files
// 1. diet advice
document.getElementById("show-diet").addEventListener("click" ,function(){
    let paragraph=document.getElementById("diet-para");
    paragraph.classList.toggle("hidden")
})
// 2.detailed diet plan
document.getElementById('show-udwt').addEventListener("click", function(){
    let para1=document.getElementById("udwt-para");
    para1.classList.toggle("hidden")
})
document.getElementById('show-normal').addEventListener("click", function(){
    let para2=document.getElementById("normal-para");
    para2.classList.toggle("hidden")
})
document.getElementById('show-over').addEventListener("click", function(){
    let para3=document.getElementById("over-para");
    para3.classList.toggle("hidden")
})
document.getElementById('show-obese').addEventListener("click", function(){
    let para4=document.getElementById("obese-para");
    para4.classList.toggle("hidden")
})
document.getElementById('show-extreem').addEventListener("click", function(){
    let para5=document.getElementById("extreem-para");
    para5.classList.toggle("hidden")
})
    // 3.fitness challenges
    document.getElementById('show-fitness').addEventListener("click", function(){
        let fitness=document.getElementById("fitness-para");
        fitness.classList.toggle("hidden")
    })



