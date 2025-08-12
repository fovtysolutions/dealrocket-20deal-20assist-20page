export function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-dealred/5 border border-dealred rounded-2xl p-12 lg:p-16">
          <div className="grid lg:grid-cols-3 gap-8 items-end">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-heading">
                  Your Deals. Your Market. Instantly Global.
                </h2>

                <p className="text-lg text-heading leading-relaxed">
                  Whether you're showcasing hot-selling products or niche
                  specialties, Deal Rocket helps you reach the right buyers at
                  the right time. Compare inquiries, respond directly, and close
                  deals — all in one place. Your offers stay live for buyers
                  around the globe to discover, 24/7.
                </p>
              </div>

              <p className="text-heading font-semibold">
                At <span className="font-bold">Deal Rockets</span>, we connect
                suppliers with serious buyers worldwide — fast, simple, and
                hassle-free.
              </p>
            </div>

            {/* Right CTA Button */}
            <div className="lg:text-right">
              <button className="bg-dealred text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-dealred-600 transition-colors shadow-lg">
                Create My First Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
