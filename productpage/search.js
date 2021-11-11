/*Modal Functioning Of Search*/
document.getElementById("search").addEventListener("click",search);
document.getElementById("searchData-appear").oninput = function(){
  debounce(getData,1000);
}
function search(){
  document.getElementById("searchModalContainer").style.display = "block";
  document.getElementById("searchModal").style.display = "block";
}
let close = document.getElementById("close");
close.addEventListener("click",() => {
  document.getElementById("searchModal").style.display = "none";
  document.getElementById("searchModalContainer").style.display = "none";
});
/*Modal Functioning Of Search End*/
/*Data Searching Code*/
async function getData() {
var searchValue=document.getElementById("searchData-appear").value
let res=await fetch(`https://618abbc034b4f400177c4860.mockapi.io/api/name?search=${searchValue}`)
let data=await res.json()
// data.forEach((searchitem)=>{
//if(searchitem.name==searchValue){
 // showData(data,searchitem.name)
/// }
// })
console.log(data)
showData(data)
} 
//getData();
function showData(data){
let midContainer=document.getElementById('searchContent')
midContainer.innerHTML=null
data.forEach((prod)=>{
   // console.log(prod)
 //  if(sitem==prod.name){
  let div=document.createElement("div")
  let div2=document.createElement("div")
  let div3=document.createElement("div")
  let div4=document.createElement("div")
  let div5=document.createElement("div")
  let div6=document.createElement("div")
 // if(prod.category=="Fab Wraps starting at 99 each"){
  let img=document.createElement("img")
   img.src=prod.img
   img.style.width="100%"
   let prod_name=document.createElement("p")
   prod_name.innerText=prod.name
   prod_name.style.fontSize="18px"
   prod_name.style.fontWeight="700"
   prod_name.style.color="black"
   prod_name.style.width="75%"
   let prod_price=document.createElement("p")
    let btn_img = document.createElement("img");
  //btn_img.src=  product_type(prod, btn_img);
   
   btn_img.style.width="12px"
   btn_img.style.height="12px"
   //btn_img.style.margin="25% 0 0 3%"
  // btn_img.style.border="1px solid red"
   prod_price.innerText="₹" +prod.price
   div5.append(btn_img,prod_price)
   div5.style.display="flex"
   div5.style.justifyContent="space-between"
   div5.style.width="22%"
   div5.style.alignItems="center"
   div5.style.marginTop="-15px"
   div.append(prod_name,div5)
   let prod_desc=document.createElement("p")
   prod_desc.innerText=prod.description
   prod_desc.style.height="16px"
   prod_desc.style.overflow="hidden"
   let readmore=document.createElement('p')
   readmore.innerText="Read More"
   //for productDetails page on click readmore
   readmore.onclick=()=>{
       window.location.href="productDetailsPage"
   }
   let prod_rating_div=document.createElement("div")
    let prod_rating = document.createElement("p")
    prod_rating_div.setAttribute("class", "prod-rating");
   prod_rating="★"+" "+prod.rating
   prod_rating_div.append(prod_rating)
   prod_rating_div.style.backgroundColor="#4caf50"
   prod_rating_div.style.color="white"
   prod_rating_div.style.width="20%"
   prod_rating_div.style.padding="6px"
   prod_rating_div.style.borderRadius="2px"
   let addtoCartBtn=document.createElement("button")
   addtoCartBtn.innerText="ADD"
   addtoCartBtn.style.backgroundColor="#FFCA28"
   addtoCartBtn.style.width="85%"
   let custom_text=document.createElement("p")
   custom_text.innerText="customisable"
   custom_text.style.fontSize="10px"
   custom_text.style.lineHeight="0"
   //for customisable
   custom_text.onclick=()=>{
   }
   div6.append(addtoCartBtn,custom_text)
   div6.style.textAlign="center"
   div6.style.width="50%"
  // addtoCartBtn.style.width="40%"
   addtoCartBtn.className="addtoCartBtn"


  
    addtoCartBtn.onclick=function() {
            console.log("Yes")
        let presentitems=JSON.parse(localStorage.getItem("FaasosCart"));
        let bagcount=0;
     console.log(presentitems);
         presentitems.forEach(function (items) {
          
          if(items.name==prod.name) {
            bagcount++;
            //let qty=document.getElementById(qty)
           //qty.innerText="bagcount"
          }
         }); 
         if(bagcount==1) {
        // alert("Already in Cart");
         } else {
            addtobag(prod);
            
  }}  
  
  div2.append(prod_rating_div,div6)
     div.style.display="flex"
     div.style.justifyContent="space-between"
     //div.style.alignItems="center"
     div2.style.display="flex"
     div2.style.height="40px"
     div2.style.justifyContent="space-between"
     div3.style.padding="2%"
     div3.append(div,prod_desc ,readmore,div2)
      div4.append(img, div3)
    //   OPENING A NEW PAGE FOR INDIVIDUAL PRODUCT
      div.onclick = ()=>{
          
          localStorage.setItem("single-prod", JSON.stringify(prod));
          window.location.href = "single_product.html";
          console.log(JSON.parse(localStorage.getItem("single-prod")));
          
      }
     div4.style.cursor="pointer"
     midContainer.append(div4)
     //midContainer.style.posi
   // }
    })
}
    
var timerid;
  function debounce(func,delay) {
    if(timerid){
        clearTimeout(timerid)
    }
    timerid=setTimeout(function () {
    func()
        
    },delay)
}