// add to cart 

const addToCart = (id) => {
    const applyJobCart = getToCart();

    const quantity = applyJobCart[id];
    if(quantity){
        const updateQuantity = quantity + 1;
        applyJobCart[id] = updateQuantity
        return true
    }
    else{
        applyJobCart[id] = 1;
    }
    localStorage.setItem("applyJob",JSON.stringify(applyJobCart))
}

// get to cart 
const getToCart = () => {
    let applyJobCart = {};
    const isApplyJob = localStorage.getItem("applyJob");
    if(isApplyJob){
        applyJobCart = JSON.parse(isApplyJob);
    } 
    return applyJobCart;
}








export {addToCart}