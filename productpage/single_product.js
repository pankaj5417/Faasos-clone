import { product_type } from "./export.js";

show_prod();

function show_prod() {
    let parent = document.querySelector(".single-product");
    parent.innerHTML = null;


    let prod = JSON.parse(localStorage.getItem("single-prod"));
    console.log(prod)
    let div1 = document.createElement("div");
    div1.setAttribute("class","prod-img")
    div1.innerHTML = `<img src="${prod.img}" / >`;

    let div2 = document.createElement("div");

    let div3 = document.createElement("div");
    div3.setAttribute("class","prod-head")
    let div4 = document.createElement("div");
    div4.innerHTML = prod.name;
    let div5 = document.createElement("div");
    div5.innerHTML = `<img class="prod-type" src="${product_type(prod)}"> &#8377; ${prod.price}`;
    div3.append(div4, div5);


    let div6 = document.createElement("div");
    div6.setAttribute("class", "prod-rating-add");
    let div7 = document.createElement("div");
    div7.innerHTML = `	&#9733; ${prod.rating}`;
    let div8 = document.createElement("div");
    div8.innerHTML = `<div>add<div><p>customisable</p>`;
    div6.append(div7, div8);

    let div9 = document.createElement("div");
    div9.innerHTML = prod.description;

    let div10 = document.createElement("div");
    div10.innerHTML = `<p>Tags<p>`;
    
    for (let i = 0; i < prod.tags.length; i++) {

        let div = document.createElement("div");
        div.setAttribute("class", "tag")
        div.innerHTML = `${prod.tags[i]}`
        div10.append(div)
    }

    div2.append(div3, div6, div9, div10);

    parent.append(div1, div2);








  
}