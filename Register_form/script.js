document.addEventListener('DOMContentLoaded',()=>{
    let firstnameEl = document.getElementById("firstname");
    let lastnameEl = document.getElementById('lastname');
    let firsterrmsgEl = document.getElementById('firsterrmsg');
    let lasterrmsgEl = document.getElementById('lasterrmsg');
    let emailEl=document.getElementById('email')
    let emailErrMsgEl=document.getElementById('emailErrMsg');
    let ageEl=document.getElementById('age');
    let ageErrMsgEl=document.getElementById('ageErrMsg');
    function handleBlur(event, errorMsgElement) {
        if (event.target.value === "") {
            errorMsgElement.textContent = "Required*";
            errorMsgElement.classList.add('err-msg');
        } else {
            errorMsgElement.textContent = "";
            errorMsgElement.classList.remove('err-msg');
        }
    }
    firstnameEl.addEventListener("blur", (event) => handleBlur(event,firsterrmsgEl));
    lastnameEl.addEventListener('blur', (event) => handleBlur(event,lasterrmsgEl));
    emailEl.addEventListener('blur',(event)=> handleBlur(event,emailErrMsgEl));
    emailEl.addEventListener('blur',(event)=>{
        if (event.target.value.includes('@')){
            emailErrMsgEl.textContent=''
            emailErrMsgEl.classList.remove('err-msg')
        }
        else{
            emailErrMsgEl.textContent='Please Enter a valid Email';
            emailErrMsgEl.classList.add('err-msg')
        }
    });
    ageEl.addEventListener('blur',(event)=> handleBlur(event,ageErrMsgEl));

});
