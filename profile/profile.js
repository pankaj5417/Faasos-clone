// export default class holder {
//      operation(){
       
        
//     }
// }


export default class holder {
    operation(){
    console.log("suman");
    let arr2 = JSON.parse(localStorage.getItem("faasosUser"))
    let profileInfo = arr2[arr2.length-1]
    let name=document.getElementById("name")
    let email = document.getElementById("email")
    let number=document.getElementById("number")
    
    name.innerText = arr2[arr2.length-1].name2
    number.innerText = arr2[arr2.length-1].number2
    email.innerText = arr2[arr2.length-1].email2
    let n = document.getElementById("n")
    n.innerText=arr2[arr2.length-1].name2

    let p = document.getElementById("p")
    p.innerText = arr2[arr2.length-1].number2

    let e = document.getElementById("e")
    e.innerText = arr2[arr2.length-1].email2
    }
}
// let boxtexts = document.querySelectorAll(".s");
//     Array.from(boxtexts).forEach(element=>{
//         //console.log(element.innerText.style.color)
//         ;
       // element.innerText=null
    // });
    
