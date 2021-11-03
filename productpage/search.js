

function search(){
    document.getElementById("searchModal").style.display = "block";
    document.getElementById("search-container").style.display = "none";
}
let close = document.getElementById("close");
close.addEventListener("click",() => {
    document.getElementById("searchModal").style.display = "none";
    document.getElementById("search-container").style.display = "block";
});