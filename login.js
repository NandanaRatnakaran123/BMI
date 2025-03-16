// function enter

function enter(){
    
    const username=document.getElementById('uname').value
    console.log(username);
    localStorage.setItem('USERNAME',username)

    const userage=document.getElementById('uage').value
    console.log(userage);
    localStorage.setItem('USERAGE',userage)
   if(username=="" || userage==""){
    alert('Please enter details')
   }else{
    
    // redirectt to home
     window.location="/home.html"
   }

  
}