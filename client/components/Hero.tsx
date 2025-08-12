import { useState } from 'react'

export function Hero() {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer')

  return (
    <section className="relative bg-gradient-to-r from-[#010140] via-blue-800 to-indigo-900 overflow-hidden min-h-[613px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/06e53d20ff6016169033322fe725853fd61c13cf?width=1976"
          alt="Global Network"
          className="absolute right-0 top-0 w-[988px] h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#010140] via-[#010140]/80 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[400px]">
          {/* Left Content */}
          <div className="text-white space-y-8 max-w-[551px]">
            <div className="space-y-6">
              <h1 className="text-[38px] lg:text-[38px] font-bold leading-[50px] text-white">
                Empowering Your Marketplace for Global Success
              </h1>

              <p className="text-base leading-5 text-[#E2E2E2] max-w-[510px] tracking-[0.32px]">
                For over a years, we've established ourselves as a trusted, internationally recognized platform,
                connecting genuine buyers and sellers across the globe. Our marketplace offers seamless, tailored
                solutions to foster meaningful connections, drive growth, and adapt to the ever-changing dynamics
                of global trade. With innovative tools, reliable market insights, and user-focused features, we
                empower businesses to seize opportunities and thrive in today's competitive landscape.
              </p>
            </div>

            <div className="inline-block">
              <button className="bg-white text-dealred px-4 py-[10px] rounded-md font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm bg-gradient-to-r from-dealred to-dealred-900 bg-clip-text text-transparent font-[700] text-[18px] leading-6 tracking-[0.36px] uppercase">
                Get customized marketing solutions!
              </button>
            </div>
          </div>

          {/* Right Content - For Buyer/Seller Toggle */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[326px] h-[60px] bg-white rounded-[60px] shadow-[0_0_4px_-1px_rgba(0,0,0,0.25)] relative p-[7px]">
              <div className="relative flex items-center h-full">
                {/* Active Background */}
                <div
                  className={`absolute top-[7px] h-[45px] w-[140px] bg-gradient-to-r from-dealred to-dealred-900 rounded-[65px] shadow-[0_0_4px_-1px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out ${
                    activeTab === 'buyer' ? 'left-[19px]' : 'left-[167px]'
                  }`}
                />

                {/* Buttons */}
                <button
                  onClick={() => setActiveTab('buyer')}
                  className={`relative z-10 w-[140px] h-[45px] flex items-center justify-center font-semibold text-[20px] leading-normal uppercase transition-colors duration-300 ${
                    activeTab === 'buyer' ? 'text-white' : 'text-[#0D0D0F]'
                  }`}
                >
                  For Buyer
                </button>
                <button
                  onClick={() => setActiveTab('seller')}
                  className={`relative z-10 w-[97px] h-[45px] flex items-center justify-center font-normal text-[20px] leading-normal uppercase transition-colors duration-300 ${
                    activeTab === 'seller' ? 'text-white' : 'text-[#0D0D0F]'
                  }`}
                >
                  For Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Globe with Icons */}
      <div className="absolute right-[450px] top-1/2 transform -translate-y-1/2 opacity-30 pointer-events-none">
        <div className="relative w-64 h-64">
          {/* Central Globe */}
          <div className="absolute inset-0 w-full h-full border-2 border-blue-300/30 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 border border-blue-300/40 rounded-full"></div>
          </div>

          {/* Floating Icons */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
            <span className="text-blue-300 text-xs">€</span>
          </div>
          <div className="absolute top-1/4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
            <span className="text-blue-300 text-xs">$</span>
          </div>
          <div className="absolute bottom-1/4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
            <span className="text-blue-300 text-xs">¥</span>
          </div>
          <div className="absolute -bottom-4 left-1/3 w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
            <span className="text-blue-300 text-xs">£</span>
          </div>
        </div>
      </div>
    </section>
  )
}
