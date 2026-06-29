async function summarizeText(){

let text=document.getElementById("inputText").value;

if(text.trim()==""){
alert("Please enter text");
return;
}

document.getElementById("result").innerText="⏳ Summarizing...";

let response=await fetch("/summarize",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
text:text
})

});

let data=await response.json();

document.getElementById("result").innerText=data.summary;

}