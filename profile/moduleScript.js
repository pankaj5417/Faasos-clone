import yellow from "./yellow.js"
  let navbar_div = document.getElementById("navbar");
  navbar_div.innerHTML=yellow()
import  holder from "./profile.js"
    const n = new holder();
    n.operation()
   
    let hr1 = document.getElementById("hr1")
    let pdiv1 = document.getElementById("pdiv1")
    let hr2 = document.getElementById("hr2")
    let hr3 = document.getElementById("hr3")
    let hr4 = document.getElementById("hr4")

    pdiv1.addEventListener("click",()=>{
        
        hr1.style.height = "1vh"
        hr1.style.backgroundColor = "#564099";
        hr1.style.borderRadius = "5px"

        hr4.style.backgroundColor="#7f878e"
        hr4.style.height = "1px"

        hr2.style.backgroundColor="#7f878e"
        hr2.style.height = "1px"

        hr3.style.backgroundColor="#7f878e"
        hr3.style.height = "1px"


    })
    let pdiv2 = document.getElementById("pdiv2")
    pdiv2.addEventListener("click",()=>{
        hr2.style.height = "1vh"
        hr2.style.backgroundColor = "#564099";
        hr2.style.color = "#564099"
        hr2.style.borderRadius = "5px"

        hr1.style.backgroundColor="#7f878e"
        hr1.style.height = "1px"

        hr4.style.backgroundColor="#7f878e"
        hr4.style.height = "1px"

        hr3.style.backgroundColor="#7f878e"
        hr3.style.height = "1px"


    })
    let pdiv3 = document.getElementById("pdiv3")
    pdiv3.addEventListener("click",()=>{
        hr3.style.height = "1vh"
        hr3.style.backgroundColor = "#564099";
        hr3.style.color = "#564099"
        hr3.style.borderRadius = "5px"

        hr1.style.backgroundColor="#7f878e"
        hr1.style.height = "1px"

        hr2.style.backgroundColor="#7f878e"
        hr2.style.height = "1px"

        hr4.style.backgroundColor="#7f878e"
        hr4.style.height = "1px"

    })
    let pdiv4 = document.getElementById("pdiv4")
    pdiv4.addEventListener("click",()=>{
        hr4.style.height = "1vh"
        hr4.style.backgroundColor = "#564099";
        hr4.style.color = "#564099"
        hr4.style.borderRadius = "5px"

        hr1.style.backgroundColor="#7f878e"
        hr1.style.height = "1px"

        hr2.style.backgroundColor="#7f878e"
        hr2.style.height = "1px"

        hr3.style.backgroundColor="#7f878e"
        hr3.style.height = "1px"

    })