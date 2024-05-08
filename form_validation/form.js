document.addEventListener('DOMContentLoaded',()=>{
    let firstnameEl=document.getElementById('firstname');
    let lastnameEl=document.getElementById('lastname');
    let submitEl=document.getElementById('submit');
    submitEl.addEventListener('click',function(event){
        if(firstnameEl.value==="" || lastnameEl.value===""){
            alert("Enter Details")
        }
    })
    let myformEl=document.getElementById("myform")
    myformEl.addEventListener("submit",function(event){
        event.preventDefault();
    })
    
})
function my(){
    document.getElementById('demo').innerHTML='fuck you'
}