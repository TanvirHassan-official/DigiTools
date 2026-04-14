import React from 'react';

const Transform = () => {
    return (
        <div>
            <div className="hero bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30">
  <div className="hero-content text-center">
    <div className="px-5 md:px-20 lg:px-40">
      <h1 className="text-3xl font-bold text-white">Ready to Transform Your Workflow?</h1>
      <p className="py-6 text-white opacity-80">
        Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
      </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center">
            <button className="btn bg-white px-4 py-2 rounded-2xl font-semibold text-[#9514FA] border border-[#9514FA]">
              Explore Products
            </button>

            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] border border-white px-4 py-2 rounded-2xl font-semibold text-white">
              View Pricing
            </button>

            
          </div>

      <p className="py-6 text-white opacity-80">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Transform;