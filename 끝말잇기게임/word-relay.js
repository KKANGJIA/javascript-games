"use strict"

const number = parseInt(prompt('몇명이 참가하나요?'), 10);

const input = document.querySelector('#input');
const button = document.querySelector('button');
let order = document.querySelector('#order');
let word_tag = document.querySelector('#word'); //제시어가 들어갈 공간

let word; // 제시어
let newWord; // 새로운 단어

/*
button.addEventListener('click', function(){
    if (!word) { // 제시어 공간이 비어있으면
        word = newWord;
        word_tag.textContent = word;
        input.value = '';
        input.focus(); // placeholder="단어를 입력해주세요."와 함께 사용 불가
        order.innerHTML < number ? order.innerHTML++ : order.innerHTML = 1;
    } else { // 제시어 공간이 비어있지 않으면
        if(word[word.length-1] === newWord[0]) {
            word = newWord;
            word_tag.textContent = newWord;
            input.value = '';
            input.focus();
            order.innerHTML < number ? order.innerHTML++ : order.innerHTML = 1;
        }else{
            alert(`${order.innerHTML}번 참가자님, 틀렸습니다. 다시 입력해주세요.`);
            input.value = '';
        }
    }
})
*/

button.addEventListener('click', function(){
    if (!word || word[word.length-1] === newWord[0]) { // 두개의 조건을 or로 묶어 코드 최적화하기
        word = newWord;
        word_tag.textContent = word;  //input, textarea, select는 value, 나머지들은 textContent
        input.value = '';
        input.focus(); //placeholder="단어를 입력해주세요."와 함께 사용 불가
        order.textContent < number ? order.textContent++ : order.textContent = 1;
    }else{
        alert(`${order.textContent}번 참가자님, 틀렸습니다. 다시 입력해주세요.`);
        input.value = '';
    }
})


// input에 입력할 때의 값을 다른 이벤트로 따로 받아오면 
// 1번이 검사를 받지 않는 경우는 없어짐...!
input.addEventListener('input', function(event) {
    newWord = event.target.value;
})

