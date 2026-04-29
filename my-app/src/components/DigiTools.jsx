import { useState } from "react";
import ToolsCard from "./ToolsCard";
import Carts from "./Carts";

const DigiTools = ({ carts, setCarts }) => {

    const [view, setView] = useState("products");

    return (
        <div className="px-5 md:px-20 lg:px-40 my-40">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
                <p className="py-6 opacity-80">Choose from our curated collection of premium digital products designed<br/> to boost your productivity and creativity.
                </p>

                <div className="space-x-4">
                    <button onClick={() => setView("products")}
                        
                        className={`btn ${view === "products" ? "btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white" : "btn bg-white rounded-2xl border border-[#9514FA]"}`}
                        >Products
                    </button>

                    <button onClick={() => setView("cart")} className={`btn ${view === "cart" ? "btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white" : "btn bg-white rounded-2xl border border-[#9514FA]"}`}>Cart ({carts.length})
                    </button>
                </div>
            </div>

            {view === "products" && (
                <ToolsCard carts={carts} setCarts={setCarts} />
            )}

            {view === "cart" && (
                <Carts carts={carts} setCarts={setCarts}/>
            )}
        </div>
    );
};

export default DigiTools;