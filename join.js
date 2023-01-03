/* 
Valli Janakiraman
IT202 
Semester Project Phase 2
Nov. 11, 2022 
*/
function init() 
{
    document.getElementById("join").addEventListener("submit", formValidation);
}

window.addEventListener("load", init)

function formValidation(e) 
{
    const firstName = document.querySelector("#first").value;

    // console.log(code + ": code")

    if (firstName == "") 
    {
        e.preventDefault();
        alert('First name is a required field')
    }
}