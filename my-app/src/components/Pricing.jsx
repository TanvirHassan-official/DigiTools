import React from 'react';

const Pricing = () => {
    return (
        <div className='my-20'>
            <div className="grid grid-cols-1 gap-1 px-4 sm:px-6 md:px-12 lg:px-24 justify-items-center ">
                <h1 className="text-4xl font-bold text-center">Simple, Transparent Pricing</h1>
                <p className="py-6  opacity-80 text-center">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
            </div>

            <div className="hero bg-base-200">
                
                <div className="hero-content ">


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-24">
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body flex flex-col justify-between min-h-105 md:min-h-115">
                                
                                <div className=''>
                                    <h2 className="text-xl font-bold">Starter</h2>
                                    <p className='opacity-80'>Perfect for getting started</p>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">$0/mo</h2>
                                    
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li className="opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access to 10 free tools</span>
                                    </li>
                                    <li className="opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Basic templates</span>
                                    </li>
                                    <li className="opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Community support</span>
                                    </li>
                                    <li className="opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>1 project per month</span>
                                    </li>

                                </ul>
                                <div className="mt-6">
                                    <button className="btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">Get Started Free</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                            <div className="card-body flex flex-col justify-between min-h-105 md:min-h-115">
                                <span className="badge badge-xs bg-amber-200 text-red-600 self-center absolute -top-2">Most Popular</span>
                                <div className=''>
                                    <h2 className="text-xl font-bold text-white">Pro</h2>
                                    <p className="opacity-80 text-white" >Best for professionals</p>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold text-white">$29/mo</h2>
                                    
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li className="opacity-80 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access to all premium tools</span>
                                    </li>
                                    <li className="opacity-80 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Unlimited templates</span>
                                    </li>
                                    <li className="opacity-80 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Priority support</span>
                                    </li>
                                    <li className="opacity-80 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Unlimited projects</span>
                                    </li>
                                    <li className="opacity-80 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Cloud sync</span>
                                    </li>
                                    <li className="opacity-80 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Advanced analytics</span>
                                    </li>

                                </ul>
                                <div className="mt-6">
                                    <button className="btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">Start Pro Trial</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body flex flex-col justify-between min-h-105 md:min-h-115">
                                
                                <div className=''>
                                    <h2 className="text-xl font-bold">Enterprise</h2>
                                    <p className='opacity-80'>For teams and businesses</p>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">$99/mo</h2>
                                    
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li className="opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Everything in Pro</span>
                                    </li>
                                    <li className="opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Team collaboration</span>
                                    </li>
                                    <li className="opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Custom integrations</span>
                                    </li>
                                    <li className="opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Dedicated support</span>
                                    </li>
                                    <li className="opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>SLA guarantee</span>
                                    </li>
                                    <li className="opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Custom branding</span>
                                    </li>

                                </ul>
                                <div className="mt-6">
                                    <button className="btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">Contact Sales</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




























        </div>
    );
};

export default Pricing;