const stats = () => {
    return (
        
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="grid gap-3 items-center">
                    <h1 className="text-5xl font-bold text-center text-white">50K+</h1>
                    <p className="text-xl text-center text-white opacity-80">Active Users</p>
                </div>

                <div className="grid gap-5 md:gap-3 items-center md:border-x-2 border-violet-300">
                    <h1 className="text-5xl font-bold text-center text-white">200+</h1>
                    <p className="text-xl text-center text-white opacity-80">Premium Tools</p>
                </div>

                <div className="grid gap-3 items-center">
                    <h1 className="text-5xl font-bold text-center text-white">4.9</h1>
                    <p className="text-xl text-center text-white opacity-80">Rating</p>
                </div>
            </div>
        </div>
        
    );
};

export default stats;