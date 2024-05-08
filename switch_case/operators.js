document.addEventListener('DOMContentLoaded', () => {
    let addEl = document.getElementById('add');
    let subEl = document.getElementById('sub');
    let mulEl = document.getElementById('mul');
    let divEl = document.getElementById('div');
    let firstEl = document.getElementById('number1');
    let secondEl = document.getElementById('number2');
    let resultEl = document.getElementById('result');
    let formEl = document.getElementById('myform');
    let continueEl=document.getElementById('continue');
    let operator;
    addEl.onclick = () => {
        operator = '+'
    }
    subEl.onclick = () => {
        operator = '-'
    }
    mulEl.onclick = () => {
        operator = '*'
    }
    divEl.onclick = () => {
        operator = '/'
    }
    function arthematic() {
        let firstElValue = parseInt(firstEl.value);
        let secondElValue = parseInt(secondEl.value);
        let result
        switch (operator) {
            case '+':
                result = firstElValue + secondElValue;
                resultEl.value = result;
                break;
            case '-':
                result = firstElValue - secondElValue;
                resultEl.value = result;
                break;
            case '*':
                result = firstElValue * secondElValue;
                resultEl.value = result;
                break;
            case '/':
                result = firstElValue / secondElValue;
                resultEl.value = result;
                break;
        }
    }
    let yesEl=document.getElementById('yes');
    let noEl=document.getElementById('no');
    secondEl.addEventListener('input', ()=>{
        arthematic()
        continueEl.textContent='Do You want to continue?'
        yesEl.classList.remove('d-none');
        noEl.classList.remove('d-none')
        continueEl.classList.remove('d-none');

    })
    yesEl.onclick=()=>{
        firstEl.value=''
        secondEl.value=''
        resultEl.value=''
        yesEl.classList.add('d-none');
        noEl.classList.add('d-none')
        continueEl.classList.add('d-none');
    }
    noEl.onclick=()=>{
        yesEl.classList.add('d-none');
        noEl.classList.add('d-none')
        continueEl.classList.add('d-none');
    }
    formEl.addEventListener('click', (event) => {
        event.preventDefault();
    })
    });
