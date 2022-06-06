// varaibile initiaion, x being the rating number selected
let x=0
const sub=document.getElementById('submit')
// the click event that changes the color of the button selected and stores the rating number in x
document.querySelectorAll(".rbtn").forEach(rbtn=>{
    rbtn.addEventListener('click', e =>{
        if(x==0){
            rbtn.style.backgroundColor = 'hsl(217, 12%, 63%)'
            rbtn.style.color='white'
            x=rbtn.innerHTML
        }else{
            const rbtn1=document.getElementById(x)
            rbtn1.style.backgroundColor="hsl(215, 19%, 18%)"
            rbtn1.style.color='hsl(217, 12%, 63%)'
            rbtn.style.backgroundColor = 'hsl(217, 12%, 63%)'
            rbtn.style.color='white'
            x=rbtn.innerHTML
        }
    return x
    })
})
// the click event for the submit button which shows the second part of the project and displays the rating stored in x
sub.addEventListener('click', e=>{
    const first=document.querySelector(".firstPart")
    const second=document.querySelector(".secondPart")
    const select = document.getElementById("selected")
    first.style.display="none"
    second.style.display="flex"
    select.innerHTML=`You selected ${x} out of 5`

})
