

function search(){
    document.getElementById("searchModal").style.display = "block";
}
let close = document.getElementById("close");
close.addEventListener("click",() => {
    document.getElementById("searchModal").style.display = "none";
});
async function getData() {
  let res=await fetch(`https://demo8715768.mockable.io/faasos`);
  let data=await res.json();
  console.log("My Data:",data);
  dataSearch(data);
} 
getData();

function dataSearch(){
  
}