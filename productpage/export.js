//to set non - veg and veg image
function product_type(prod) {
     if (prod.type === 'veg') {
              
        
         return "https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png";
          } else {
         return  "https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png";
          }
}


export {product_type};