document.addEventListener('DOMContentLoaded',()=>{
    let firstNameEl=document.getElementById('firstName');
    let firstNameErrEl=document.getElementById('firstNameErr');

    let lastNameEl=document.getElementById('lastName');
    let lastNameErrEl=document.getElementById('lastNameErr');

    let mobileNumberEl=document.getElementById('mobileNumber');
    let mobileNumberErrEl=document.getElementById('mobileNumberErr');
    let fromEl=document.getElementById('myForm');

    firstNameEl.addEventListener('blur',(event)=>{
        if(event.target.value===''){
            firstNameErrEl.textContent='*Required'
        }
        else{
            firstNameErrEl.textContent=''
        }
        
    })
    lastNameEl.addEventListener('blur',(event)=>{
        if(event.target.value===''){
            lastNameErrEl.textContent='*Required'
        }
        else{
            lastNameErrEl.textContent=''
        }
    })
    mobileNumberEl.addEventListener('blur',(event)=>{
        if(event.target.value.length===10){
            mobileNumberErrEl.textContent=''
        }
        else{
            mobileNumberErrEl.textContent='mobile number should contain 10 numbers'
        }
    })

})