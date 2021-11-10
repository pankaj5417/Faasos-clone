// modal search
document.getElementById("searchData-appear").addEventListener("input", searchFoodData);


// search click 

document.getElementById("search").addEventListener("click", search);
/*Modal Functioning Of Search*/
  function search(){
      document.getElementById("searchModal").style.display = "block";
  }

  let close = document.getElementById("close");

  close.addEventListener("click",() => {
      document.getElementById("searchModal").style.display = "none";
  });

/*Modal Functioning Of Search End*/

/*Data Searching Code*/
var searchFood;
async function getData() 
{
  let res = await fetch(`https://demo8715768.mockable.io/faasos`);
  let data = await res.json();
  console.log("My Data:",data);
  searchFood = data;
  
} 
getData();
var searchContent = document.getElementById("searchContent");

function dataSearch(data){
  searchContent.innerHTML = null;
  data.forEach((food) => {
    
    let div = document.createElement("div");
    div.setAttribute("class","foodData");
    
    let img = document.createElement("img");
    img.src = food.img;
    let head = document.createElement("div");
    head.innerHTML = food.name;
    let price = document.createElement("div");
    price.innerHTML = "₹ " +food.price;
    let btn = document.createElement("button");
    btn.innerHTML = "ADD";
    
    div.append(img,head,price,btn);
    searchContent.append(div);
  });
  console.log(data);
}
function searchFoodData(){
  let inputValue = document.getElementById("searchData-appear").value;
  let arr=[];
  searchFood.forEach((food) => {
   if(food.name.includes(inputValue) || food.category.includes(inputValue))
   {
     arr.push(food);
   }
   
  });
dataSearch(arr);
}


