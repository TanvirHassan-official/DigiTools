import userImg from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const Get_started = () => {
    return (
        <div className='my-30'>
            <div className="grid grid-cols-1 gap-1 px-4 sm:px-6 md:px-12 lg:px-24 justify-items-center ">
                <h1 className="text-4xl font-bold text-center">Get Started in 3 Steps</h1>
                <p className="py-6  opacity-80 text-center">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            <div className="hero bg-base-200">

                <div className="hero-content ">


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-24">
                        <div className="card bg-base-100 shadow-sm">
                            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full absolute right-10 px-2 py-1.5 text-xs">01</p>

                            <figure className="px-10 pt-10">
                                <img src={userImg} alt="user" className="rounded-full bg-linear-to-r from-[#e2deff] to-[#efe8f5] p-4" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Create Account</h2>
                                <p className='opacity-80 px-2'>Sign up for free in seconds. No credit card required to get started.</p>

                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm">
                            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full absolute right-10 px-2 py-1.5 text-xs">02</p>

                            <figure className="px-10 pt-10">
                                <img src={packageImg} alt="user" className="rounded-full bg-linear-to-r from-[#e2deff] to-[#efe8f5] p-4" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Choose Products</h2>
                                <p className='opacity-80 px-2'>Browse our catalog and select the tools that fit your needs.</p>

                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm">
                            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full absolute right-10 px-2 py-1.5 text-xs">03</p>

                            <figure className="px-10 pt-10">
                                <div className="w-24 h-24 rounded-full bg-linear-to-r from-[#e2deff] to-[#efe8f5] p-4 flex items-center justify-center">
                                    <img
                                        src={rocketImg}
                                        alt="user"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Start Creating</h2>
                                <p className='opacity-80 px-2'>Download and start using your premium tools immediately.</p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Get_started;