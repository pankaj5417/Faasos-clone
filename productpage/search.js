var searchContainer=document.getElementById("search-container")

function search(){
    document.getElementById("searchModal").style.display = "block";
    searchContainer.style.display="none"
}
let close = document.getElementById("close");
close.addEventListener("click",() => {
    document.getElementById("searchModal").style.display = "none";
});