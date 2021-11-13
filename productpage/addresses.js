
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