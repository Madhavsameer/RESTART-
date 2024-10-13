let number = prompt("Enter the number: ");
let first = document.getElementById('1');
let second = document.getElementById('2');
let third = document.getElementById('3');
let fourth = document.getElementById('4');
let fifth = document.getElementById('5');
let sixth = document.getElementById('6');
let seventh = document.getElementById('7');
let eighth = document.getElementById('8');
let ninth = document.getElementById('9');
let tenth = document.getElementById('10');

// Function to speak the text
function speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

// Function to update the rows with a delay and speak each row
function loadTable() {
    setTimeout(() => {
        let text1 = `${number} times 1 equals ${number * 1}`;
        first.innerHTML = `${number} X 1 = ${number * 1}`;
        speak(text1);
    }, 1000); 

    setTimeout(() => {
        let text2 = `${number} times 2 equals ${number * 2}`;
        second.innerHTML = `${number} X 2 = ${number * 2}`;
        speak(text2);
    }, 2000); 

    setTimeout(() => {
        let text3 = `${number} times 3 equals ${number * 3}`;
        third.innerHTML = `${number} X 3 = ${number * 3}`;
        speak(text3);
    }, 3000); 

    setTimeout(() => {
        let text4 = `${number} times 4 equals ${number * 4}`;
        fourth.innerHTML = `${number} X 4 = ${number * 4}`;
        speak(text4);
    }, 4000); 

    setTimeout(() => {
        let text5 = `${number} times 5 equals ${number * 5}`;
        fifth.innerHTML = `${number} X 5 = ${number * 5}`;
        speak(text5);
    }, 5000); 

    setTimeout(() => {
        let text6 = `${number} times 6 equals ${number * 6}`;
        sixth.innerHTML = `${number} X 6 = ${number * 6}`;
        speak(text6);
    }, 6000); 

    setTimeout(() => {
        let text7 = `${number} times 7 equals ${number * 7}`;
        seventh.innerHTML = `${number} X 7 = ${number * 7}`;
        speak(text7);
    }, 7000); 

    setTimeout(() => {
        let text8 = `${number} times 8 equals ${number * 8}`;
        eighth.innerHTML = `${number} X 8 = ${number * 8}`;
        speak(text8);
    }, 8000); 

    setTimeout(() => {
        let text9 = `${number} times 9 equals ${number * 9}`;
        ninth.innerHTML = `${number} X 9 = ${number * 9}`;
        speak(text9);
    }, 9000); 

    setTimeout(() => {
        let text10 = `${number} times 10 equals ${number * 10}`;
        tenth.innerHTML = `${number} X 10 = ${number * 10}`;
        speak(text10);
    }, 10000); 
}

// Call the function to start loading the table with delays and speech
loadTable();
