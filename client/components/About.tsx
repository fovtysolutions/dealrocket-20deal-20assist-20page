import { Eye, Target } from "lucide-react";

export function About() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/01acb200905fdf591ed2a58a0024d3106e1d6322?width=1000"
              alt="Trade Assistance"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="text-right space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-heading">
                About Deal Rockets Trade Assist Program
              </h2>

              <p className="text-tertiary-text leading-relaxed text-lg">
                The Deal Rockets Trade Assist Program is a complete support
                system designed to make global sourcing secure, transparent, and
                hassle-free. It ensures smooth transactions, verified suppliers,
                and clear communication from enquiry to delivery.
              </p>

              <p className="text-tertiary-text leading-relaxed">
                Built on proven global trade assistance practices, this program
                helps you source products with confidence, negotiate favorable
                terms, and connect with reliable suppliers worldwide — knowing
                your procurement journey is backed by strong quality checks and
                trust-focused processes at every step.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Vision Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-15 h-15 bg-dealred/10 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-dealred rounded-full flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-heading">
                      Vision
                    </h3>
                    <p className="text-sm text-primary-text leading-relaxed">
                      To become the most trusted global B2B marketplace,
                      enabling businesses of every size to connect, trade, and
                      grow with complete transparency, efficiency, and service
                      excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-15 h-15 bg-dealred/10 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-dealred rounded-full flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-heading">
                      Mission
                    </h3>
                    <p className="text-sm text-primary-text leading-relaxed">
                      To simplify global trade by connecting buyers and sellers
                      through verified sourcing, reliable vendor networks, and
                      end-to-end procurement assistance that builds trust and
                      long-term partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
