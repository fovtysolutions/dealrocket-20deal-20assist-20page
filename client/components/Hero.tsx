export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/06e53d20ff6016169033322fe725853fd61c13cf?width=1976" 
          alt="Global Network" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
      </div>

      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Empowering Your Marketplace for Global Success
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                For over a years, we've established ourselves as a trusted, internationally recognized platform, 
                connecting genuine buyers and sellers across the globe. Our marketplace offers seamless, tailored 
                solutions to foster meaningful connections, drive growth, and adapt to the ever-changing dynamics 
                of global trade. With innovative tools, reliable market insights, and user-focused features, we 
                empower businesses to seize opportunities and thrive in today's competitive landscape.
              </p>
            </div>

            <div className="inline-block">
              <button className="bg-white text-dealred px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg">
                Get customized marketing solutions!
              </button>
            </div>
          </div>

          {/* Right Content - For Buyer/Seller Toggle */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <div className="flex items-center">
                <button className="bg-gradient-to-r from-dealred to-dealred-900 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg">
                  For Buyer
                </button>
                <button className="text-secondary-text px-8 py-3 font-medium text-lg hover:text-dealred transition-colors">
                  For Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <div className="w-32 h-32 border-2 border-white rounded-full"></div>
      </div>
      <div className="absolute bottom-10 left-10 opacity-20">
        <div className="w-24 h-24 border-2 border-white rounded-full"></div>
      </div>
    </section>
  )
}
