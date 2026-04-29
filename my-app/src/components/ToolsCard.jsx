import { use } from "react";
import toast from "react-hot-toast";



const toolsPromise = fetch('./DigiTools.json').then(res => res.json())

const ToolsCard = ({carts, setCarts}) => {

    const tools = use(toolsPromise)

    const addTools = (tool)=>{
        const isAdded = carts.find(c=>c.id == tool.id);
        if(isAdded){
            toast.error("Already added")
            return
        }
        setCarts([...carts, tool])
        toast.success('Item added successfully')
        
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">{

            tools.map(tool =>(
                
                <div key={tool.id} className="card bg-base-100 shadow-sm space-y-2">
                    <div className="card-body">
                        
                        <div className="flex justify-between">
                            <img src={tool.icon} alt={tool.name} />
                            <span className="badge badge-xs badge-warning">{tool.tagType}</span>
                        </div>
                        <h2 className="text-3xl font-bold">{tool.name}</h2>
                        <p className="py-6  opacity-80">{tool.description}</p>
                        <p className="text-xl">${tool.price}/{tool.period}</p>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>
                                    {tool.features[0]}
                                </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{tool.features[1]}</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{tool.features[2]}</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white" onClick={()=>addTools(tool)} >Buy Now</button>
                        </div>
                    </div>
                </div>
            ))



        }






        </div>
    );
};

export default ToolsCard;