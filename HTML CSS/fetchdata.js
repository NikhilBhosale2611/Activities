let myBtn = document.getElementById("fetchbtn"); 
let content = document.getElementById("fetchdata");
function getData(){
    url = "https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        content.innerHTML = JSON.stringify(data);
    })
}


getData()