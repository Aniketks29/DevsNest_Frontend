window.onload = function Calculate() {
    

    function Add() {
        let first_num = Number(document.querySelector(".first-num").value);
        let second_num = Number(document.querySelector(".second-num").value);
        
        let ans = document.querySelector(".output-value");
        ans.innerHTML = first_num + second_num;
        console.log("Added");
    }

    function Subtract() {
        let first_num = Number(document.querySelector(".first-num").value);
        let second_num = Number(document.querySelector(".second-num").value);
        
        let ans = document.querySelector(".output-value");
        ans.innerHTML = first_num - second_num;
        console.log("Subtracted");
    }

    function Multiply() {
        let first_num = Number(document.querySelector(".first-num").value);
        let second_num = Number(document.querySelector(".second-num").value);
        
        let ans = document.querySelector(".output-value");
        ans.innerHTML = first_num * second_num;
        console.log("Multiplied");
    }

    function Division() {
        let first_num = Number(document.querySelector(".first-num").value);
        let second_num = Number(document.querySelector(".second-num").value);
        
        let ans = document.querySelector(".output-value");
        ans.innerHTML = first_num / second_num;
        console.log("Divided");
    }

    document.querySelector(".submit-add").addEventListener("click", Add);

    document.querySelector(".submit-multiply").addEventListener("click", Multiply);

    document.querySelector(".submit-subtract").addEventListener("click", Subtract);

    document.querySelector(".submit-division").addEventListener("click", Division);
}

