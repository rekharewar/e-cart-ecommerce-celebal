//for add item to cart
export const addCart=(product)=>{
    return{
        type:"ADDCART",
        payload:product
    }
}

//for delete item from cart
export const delCart=(product)=>{
    return{
        type:"DELETECART",
        payload:product
    }
}