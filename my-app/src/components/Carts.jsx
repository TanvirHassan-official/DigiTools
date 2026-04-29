import toast from "react-hot-toast";

const Carts = ({ carts, setCarts }) => {

const sum = carts.reduce((total, tool) => total + tool.price, 0);

    const emptyCart = ()=>{
        setCarts([]) 
        toast.success('Checkout done!')  
    }

    const emptyTool = (id)=>{
        setCarts(c => c.filter(item => item.id !== id)); 
        toast.error('Product removed!')  
    }

    if (carts.length == 0) {
        return (
            <div>
                <div className="card bg-base-100  shadow-sm no-card">
                    <div className="card-body py-25 px-5 flex gap-5 items-center justify-center">
                        
                        <span><i className="fa-solid fa-cart-arrow-down"></i></span>
                        <h2 className="card-title text-[#002C5C] font-semibold text-lg">No products available</h2>
                        <p className="text-sm text-[#64748B]">Check products for easier work life.</p>

                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="my-20 space-y-1">
            <h2 className="text-xl font-bold grid justify-between">Your Cart</h2>
            {
                carts.map(cart => (
                    <div key={cart.id}>

                        <div className="card bg-base-100 card-md shadow-sm px-6 my-1">
                            <div className="card-body grid grid-cols-2">
                                <div className="flex gap-2">
                                    <img src={cart.icon} alt={cart.name} />
                                    <div>
                                        <h2 className="card-title opacity-80">{cart.name}</h2>
                                        <p>${cart.price}</p>
                                    </div>

                                </div>
                                <div className="justify-end card-actions">
                                    <button className="btn text-red-500" onClick={()=>emptyTool(cart.id)}>Remove</button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
            <div className="space-y-4 p-4">
                <div className="flex justify-between">
                <p className="text-xl font-bold">Total:</p>
                <p className="text-xl font-bold">${sum}</p>
                </div>
                <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white" onClick={()=>emptyCart()}>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Carts;