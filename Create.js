/* 
Valli Janakiraman
IT202 
Semester Project Phase 2
Nov. 11, 2022 
*/
function init() 
{
    document.getElementById("createform").addEventListener("submit", formValidation);
}

window.addEventListener("load", init)

function formValidation(e) 
{
    const code = document.querySelector("#code").value;

    // console.log(code + ": code")

    if (code == "") 
    {
        e.preventDefault();
        alert('Dish Code is required for this item!!')
    }
}