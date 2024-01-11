"use strict"

function fetchData() {
    fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((result) => console.log(result.data))
}

const displaySection = document.getElementById("display-section");
const disp=document.querySelector(".display")
function fetchDataAndDisplay() {
    fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((result) => {
            //displaySection.innerHTML=result.data[0].first_name}
            result.data.forEach((person)=> {
        disp.innerHTML = disp.innerHTML + `<li>${person.first_name} ,  ${person.last_name}  <img src= ${person.avatar}> <li>`
        disp.classList.add("sticky");
       
    });
});
}
