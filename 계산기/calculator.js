"use strict"

//정의부
let numone; //숫자1 변수
let numtwo; // 숫자2 변수
let operator; // 연산자 변수

//숫자
const num0 = document.querySelector('#num-0');
const num1 = document.querySelector('#num-1');
const num2 = document.querySelector('#num-2');
const num3 = document.querySelector('#num-3');
const num4 = document.querySelector('#num-4');
const num5 = document.querySelector('#num-5');
const num6 = document.querySelector('#num-6');
const num7 = document.querySelector('#num-7');
const num8 = document.querySelector('#num-8');
const num9 = document.querySelector('#num-9');
let result = document.querySelector('#result');

//연산자
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
let operator_space = document.querySelector('#operator');
const calculate_space = document.querySelector('#calculate');

const clear = document.querySelector('#clear');

//실행부
numbers = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];
numbers.map((num) => {
    num.addEventListener('click', function(e) {
        if (!numone) {
            numone = e.target.innerHTML;
            result.value = numone; //※input은 innerHTML이나 TextContent가 아니라 value로 접근하기
            console.log(numone , 'numone');
        } else if (numone) {
            numtwo = e.target.innerHTML;
            result.value = numtwo;
            console.log(numtwo , 'numtwo');
        }

    });
});

operators = [plus, minus, multiply, divide]
operators.map((ope) => {
    ope.addEventListener('click', function(e) {
        if (!numone) {
            alert('숫자부터 입력해주세요.');
        } else {
            operator = e.target.innerHTML;
            operator_space.value = e.target.innerHTML;
            console.log(e.target.innerHTML, 'operator');
        }
    })
})

calculate_space.addEventListener('click', () => {
    if(numtwo) {
        if (operator == '+') {result.value = Number(numone) + Number(numtwo)}
        else if (operator == '-') {result.value = Number(numone) - Number(numtwo) }
        else if (operator == 'x') {result.value = Number(numone) * Number(numtwo) }
        else if (operator == '/') {result.value = Number(numone) / Number(numtwo) }
        
    } else {
        alert('숫자부터 입력해주세요.');
    }
    
})

//초기화
clear.addEventListener('click', () => {
    result.value = '';
    operator_space.value = '';
    numone = '';
    numtwo = '';
    operator = '';
})

