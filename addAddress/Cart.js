
async function getData(){

    let res=await fetch(`https://demo8715768.mockable.io/faasos`)
    let data=await res.json()
    console.log(data)
    showData(data)

} 
getData()

function showData(data){
    let midContainer=document.getElementById('mid-container')
      data.forEach((prod)=>{
         // console.log(prod)
        let div=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let div4=document.createElement("div")
       // if(prod.category=="Fab Wraps starting at 99 each"){
        //  console.log(prod);
        let img=document.createElement("img")
         img.src=prod.img
         img.style.width="100%"
         let prod_name=document.createElement("p")
         prod_name.innerText=prod.name
         let prod_price=document.createElement("p")
         prod_price.innerText="₹" +prod.price
         div.append(prod_name,prod_price)
         let prod_desc=document.createElement("p")
         prod_desc.innerText=prod.description
         let prod_rating_div=document.createElement("div")
         let prod_rating=document.createElement("p")
         prod_rating="★"+""+prod.rating
         prod_rating_div.append(prod_rating)
         prod_rating_div.style.backgroundColor="green"
         prod_rating_div.style.color="white"
         prod_rating_div.style.width="15%"
         prod_rating_div.style.borderRadius="4px"
         let addtoCartBtn=document.createElement("button") 
         addtoCartBtn.innerText="ADD"
         addtoCartBtn.style.backgroundColor="#FFCA28"
        // addtoCartBtn.style.width="40%"
         addtoCartBtn.className="addtoCartBtn"

      //   if(localStorage.getItem("displayitem")===null) {
     //    localStorage.setItem("displayitem",JSON.stringify([]))
     //}

    
        
         addtoCartBtn.onclick=function() {
                //  console.log("Yes")
              let presentitems=JSON.parse(localStorage.getItem("FaasosCart"));
              let bagcount=0;
              // console.log(presentitems);
               presentitems.forEach(function (items) {
                
               if(items.name==prod.name) {
                 bagcount++;
                 //let qty=document.getElementById(qty)
                 //qty.innerText="bagcount"
                }
               }); 
               if(bagcount==1) {
                  alert("Already in Cart");
              } else {
                  addtobag(prod);
                  
               }   
               }

               if(localStorage.getItem("FaasosCart")===null) {
         localStorage.setItem("FaasosCart",JSON.stringify([]))
     }
     function addtobag(p) {
     let products_cart=JSON.parse(localStorage.getItem("FaasosCart"));
     products_cart.push(p);

     localStorage.setItem("FaasosCart",JSON.stringify(products_cart));
         }





         div2.append(prod_rating_div,addtoCartBtn)
         div.style.display="flex"
         div.style.justifyContent="space-between"
         div2.style.display="flex"
         div2.style.justifyContent="space-between"
         div3.style.padding="2%"

         div3.append(div,prod_desc,div2)
         div4.append(img,div3)
         div4.style.backgroundColor = 'white'
         midContainer.append(div4)
         
      //  }
     
      })

}
var total2;
var total_pr=document.getElementById("total")
var total_amt=document.getElementById("total-amt")
let qty=document.getElementById("qty")
let kart=JSON.parse(localStorage.getItem("FaasosCart"))
var count=0;
// console.log(kart)
function cartData(){
  kart.forEach((item)=>{
      count++
qty.innerHTML=count+" "+"Item";

        // console.log(item.name)
        let div=document.createElement("div")
        let div2=document.createElement("div")
        let product_name=document.createElement("p")
        product_name.innerText=item.name
        product_name.style.width="90%"

        let product_price=document.createElement("p")
        product_price.innerText="₹"+" "+item.price
        //let buttonLeft=document.createElement("button")
        let buttonLeft=document.createElement("img")
        buttonLeft.src="https://github.com/pankaj5417/koovs.com/blob/main/icons/leftbtn.png?raw=true"
       
        let buttonRight=document.createElement("img")
        buttonRight.src="https://github.com/pankaj5417/koovs.com/blob/main/icons/right btn.png?raw=true"
       
       
      
        buttonLeft.style.width="43px"
        buttonLeft.style.marginRight="3px"
      let itemNo=document.createElement("p")
        itemNo.innerText=" "+"1"+" "
       // buttonRight.innerText="+"
        buttonLeft.style.backgroundColor="white"
        buttonRight.style.backgroundColor="white"
        buttonRight.style.width="40px"
        buttonRight.style.height="40px"
        buttonLeft.style.height="40px"
      
        buttonRight.style.marginLeft="3px"
        buttonLeft.className="cartLeftBtn"
        buttonRight.className="cartRightBtn"
        let btn_img = document.createElement("img")
        if (item.type === 'veg') {
            
            btn_img.src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
        } else {
            btn_img.src = "https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png"
        }
       btn_img.style.width="12px"
       btn_img.style.height="12px"

        div2.append( buttonLeft,itemNo,buttonRight)
        div2.style.display="flex"
        div2.style.width="25%"
        div2.style.marginLeft="2%"
        let div3=document.createElement("div")
        div3.append(btn_img,product_name)
        div3.style.display="flex"
        div3.style.alignItems="center"
        div3.style.width="56%"
        div3.style.justifyContent="space-between"



        let cartItem=document.getElementById("cart-item")
        div.append(div3,div2,product_price)
       // product_name.style.width="58%"
        product_price.style.width="10%"
        product_price.style.marginLeft="2%"

        div.style.display="flex"
       // div.style.height="20px"
        div.style.width="100%"
        cartItem.append(div)

        var total=kart.reduce(function(ac,el){ 

            return ac+ Number(el.price)
            },0)
           // var total_pr=document.getElementById("total")
           // var total_amt=document.getElementById("total-amt")
            //total_pr.style.textAlign="right"
           // total_pr.innerHTML='₹'+" "+total
            total_amt.innerHTML='₹'+" "+total

            //var total_pr2=document.getElementById("total2")
            var tax=0;
            tax=total*0.05
            var gsttax=document.getElementById("gsttax").innerText='₹'+" "+parseInt(tax)
             total2=total+tax
            total3=total2
            total4=total2
            total_pr.innerHTML='₹'+" "+parseInt(total2)
            total_pr.style.fontWeight="700"

            
           // total_pr.style.fontSize="16px"
           // total_pr.style.width="13%"
 

           // total_pr.style.marginLeft="10%"
    })
}
cartData()


function viewCoupons(){
  var couponContainer=document.getElementById("coupon-container")


 let div=document.getElementById("coupon-div")
 div.innerHTML=null

 let div2=document.createElement("div")
 let div3=document.createElement("div")
 let div4=document.createElement("div")
 let div5=document.createElement("div")
 let div6=document.createElement("div")
 let div7=document.createElement("div")
 let div8=document.createElement("div")

 let div9=document.createElement("div")


 let couponTopBtn=document.createElement("p")
 couponTopBtn.innerText="<"
 couponTopBtn.style.cursor="pointer"
 couponTopBtn.style.marginRight="2%"
 couponTopBtn.onclick=()=>{
     couponContainer.style.display="none"
 }
 


 let couponTop=document.createElement("p")
 couponTop.innerText="Got an Offer/ Promo Code?"

   div7.append( div8,vertline,button3)
 
 
   button3.onclick=()=>{
      //  console.log(couponBox.value)
    applyCoupon(couponBox.value)
}
=======

 couponBox.style.width="100%"
 couponBox.style.border="none"
 couponBox.style.outline="none"

 let button3=document.createElement("p")
 button3.innerText="APPLY"


 let label=document.createElement("p")
 label.innerText="Enter code"
 label.style.marginLeft="10px"
 label.style.lineHeight="0"

 div8.append(label,couponBox)
 div8.style.width="83%"
// div8.style.marginLeft=""
 let hr1=document.createElement("hr")
 let hr2=document.createElement("hr")
 let hr3=document.createElement("hr")
 vertline.style.height='50px'
 vertline.style.backgroundColor="black"
 vertline.style.width="1px"

 div7.append(div8,vertline,button3)


 button3.onclick=()=>{
     console.log(couponBox.value)
  applyCoupon(couponBox.value)
}

 div9.append(hr1,div7,hr2)
 div7.style.display='flex'
 //vertline.style.height='40px'
// vertline.style.backgroundColor="black"
// vertline.style.width="1px"
 div7.style.width="100%"
 div7.style.height="80px"
 div7.style.margin=" 5px"
 div7.style.alignItems="center"
 div7.style.justifyContent="space-between"

 let couponHeading=document.createElement("p")
 couponHeading.innerText="Available Coupons"

 let coupon1=document.createElement("p")
 coupon1.innerText="BIGSAVE"
 coupon1.style.border=" 1.5px dashed #FFA000"
 let couponDetail1=document.createElement("p")
 couponDetail1.innerText="Get Flat Rs 200 Off on all orders above 800."

 let button1=document.createElement("p")
 let button2=document.createElement("p")
 button1.innerText="APPLY"
 button2.innerText="APPLY"
 button2.style.color="indigo"
 button1.style.color="indigo"
 button1.style.cursor="pointer"
 button2.style.cursor="pointer"
 button3.style.cursor="pointer"

 let coupon2=document.createElement("p")
 coupon2.innerText="WRAPPED"
 coupon2.style.border=" 1.5px dashed #FFA000"
 coupon2.style.padding="3px 20px"
 coupon1.style.padding="3px 20px"
 coupon2.style.backgroundColor="#faf9f5"
 coupon1.style.backgroundColor="#faf9f5"
 coupon1.style.borderRadius="2px"
 coupon2.style.borderRadius="2px"


 let couponDetail2=document.createElement("p")
 couponDetail2.innerText="Get 60% Off Upto ₹120 on minimum order of ₹199."

 div2.append(coupon1,button1)
 div3.append(coupon2,button2)
 div4.append(div2,couponDetail1)

 div5.append(hr3,div3,couponDetail2)
 div4.style.height="13%"
 div4.style.margin="7px 0"
 div2.style.margin=" 14px 0"
 div5.style.margin="7px 0"
 div3.style.margin="14px 0"



 div.append(div6, div9 ,couponHeading,div4,div5)
 div.style.width="34%"
 div.style.backgroundColor="white"
 div.style.borderRadius="4px"
 div.style.height="88vh"
div.style.padding="15px"
div.style.position="fixed"
div.style.top="40px"
div.style.left="33%"
div.style.zIndex="100"
div.style.display="block"


 div2.style.display="flex"
 div2.style.justifyContent="space-between"
 div3.style.display="flex"
 div3.style.justifyContent="space-between"
 
 //couponContainer.append(div)
// couponContainer.style.border="1px solid red"
couponContainer.style.display="block"


}
function applyCoupon(d){
    // console.log(total2)


  if(d=="BIGSAVE"&&total2>=800){
     var total12=total2-200

        total_pr.innerHTML='₹'+" "+parseInt(total12)
        // console.log(total2)


  }
}

function gotoCart(){
window.location.href="cart.html"
}




var div = document.querySelector(".checkStatus");
var id;
function activate(e) {
  // console.log(e.id);
  id = e.id;

  for (var i = 0; i <= 3; i++) {
    var classDiv = document.getElementById(String(i));
    if (classDiv) {
      classDiv.classList.remove("active");
      classDiv.value = "";
    }

  }
}
let div = document.getElementById(id);
div.classList.add("active");
div.value = div.innerText;
}

// User Info

let user = JSON.parse(localStorage.getItem("faasosUser"))[0]

let username = user.name
let phone = user.number
let item = document.getElementById('cart-status')

let h3 = document.createElement('h3')
  h3.innerText = `${username} | ${phone}`
  h3.classList.add('loginData')

  item.append(h3);

console.log(phone);
// Map 
var confirmBtn = document.getElementById("confirmPosition");
var onClickPositionView = document.getElementById("onClickPositionView");
var onIdlePositionView = document.getElementById("onIdlePositionView");

// Initialize locationPicker plugin
var lp = new locationPicker(
"map",
{
  setCurrentPosition: true, // You can omit this, defaults to true
},
{
  zoom: 15, // You can set any google map options here, zoom defaults to 15
}
);

// Listen to map idle event, listening to idle event more accurate than listening to ondrag event
google.maps.event.addListener(lp.map, "idle", function (event) {
// Get current location and show it in HTML
var location = lp.getMarkerPosition();
getReverseGeocodingData(location.lat, location.lng);
let inputLat = document.querySelector("#LATITUDE_ELEMENT_ID");
let inputLng = document.querySelector("#LONGITUDE_ELEMENT_ID");
inputLat.value = location.lat;
inputLng.value = location.lng;
});

async function getReverseGeocodingData(lat, lng) {
let response = await fetch(
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCFqHdww7qwKP8nyQ4MUNFDPAgnfzNbZAU`
);

let data = await response.json();
let town = data.results[0].address_components[2].short_name;
let address = data.results[3].formatted_address;
appendAddress(town, address);
}

function appendAddress(town, address) {
let townEl = document.getElementById("town");
let addressEl = document.getElementById("address");

townEl.innerText = town;
addressEl.innerText = address;
}

function saveAddress() {
let inputLat = document.querySelector("#LATITUDE_ELEMENT_ID").value;
let inputLng = document.querySelector("#LONGITUDE_ELEMENT_ID").value;
let house = document.getElementById("house").value;
let landmark = document.getElementById("landmark").value;

if (id == "1") {
  var addressType = "home";
} else if (id == "2") {
  var addressType = "work";
} else if (id === "3") {
  var addressType = "others";
}


  let addressForm = {
    houseNo: house,
    landmark: landmark,
    addressType: addressType,
    lat: inputLat,
    lng: inputLng,
  };
  let savedAddress = JSON.parse(localStorage.getItem("Address"))
if(savedAddress){
  savedAddress.push(addressForm)
  localStorage.setItem("Address", JSON.stringify(savedAddress));
}else{ 
    localStorage.setItem("Address", JSON.stringify([addressForm]));
}
=======

house = "";
landmark = "";
document.querySelector(".bg-modal").style.display = "none";
}
document.getElementById("addAddress").addEventListener("click", function () {
document.querySelector(".bg-modal").style.display = "flex";
});
document.getElementById("closeMap").addEventListener("click", function () {
document.querySelector(".bg-modal").style.display = "none";
});

// AppendAddresses
let savedAddress = JSON.parse(localStorage.getItem("Address"))
if(savedAddress.length > 0){

  savedAddress.forEach((el)=>{
    let parent = document.getElementById('cart-address')
    let icon = document.getElementById('i')
    if(el.addressType == 'home'){
      icon.classList.add = 'fas'
      icon.classList.add = 'fa-home'

    }else if(el.addressType == 'work'){
      icon.classList.add = 'fas'
      icon.classList.add = 'fa-home'

    }else if(el.addressType == 'other'){
      icon.classList.add = 'fas'
      icon.classList.add = 'fa-home'

    }


    let h3 = document.getElementById('h3')
    h3.innerText = el.addressType
    console.log(el.addressType)
  })




}


// Payment Sectioin
var div = document.querySelector(".checkPayment");
var id;
function activatePayment(e) {            
   
  id = e.id; 

  for (var i = 0; i <= 4; i++) {
    var classDiv = document.getElementById('payment_method_'+String(i));
    var showDiv = document.getElementById('paymentType'+String(i));
    if (classDiv && showDiv) {
      classDiv.classList.remove("payActive");
      console.log('ok');
      classDiv.value = "";
      showDiv.style.display = 'none'
    }
  }
  let idIndex = id[id.length-1]
  let leftDiv = document.getElementById(id); 
  let rightDiv = document.getElementById('paymentType'+String(idIndex));
  leftDiv.classList.add("payActive");
  leftDiv.value = div.innerText;

  rightDiv.style.display = 'block'


if(id === 'payment_method_1'){



}else if('payment_method_2'){
  let value = JSON.parse(localStorage.getItem("faasosUser"))
  document.getElementById('payment_number').value = value[0].number

}else if('payment_method_3'){
  console.log(e.id);
}else if('payment_method_4'){
  console.log(e.id);
}



}


function changeNumber(){
  let item = document.getElementById('payment_number')
  item.removeAttribute('readonly')
  item.style.color = 'black'
}