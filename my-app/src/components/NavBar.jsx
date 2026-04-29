const NavBar = ({carts}) => {
    return (
        <div className='px-5 md:px-20 lg:px-40'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-linear-to-r from-[#4F39F6] to-[#9514FA]k rounded-box mt-3 w-52 p-2 shadow text-white font-semibold">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <h2 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-bold pb-0.5">DigiTools</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex flex-wrap gap-4 ">
                    <a className="btn bg-white rounded-2xl border border-[#9514FA]"> <i className="fa-solid fa-cart-shopping bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"></i>({carts.length}) Login</a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;