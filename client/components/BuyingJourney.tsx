import { Search, HelpCircle, Percent, Handshake } from "lucide-react";

export function BuyingJourney() {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Browse Products",
      description:
        "Discover thousands of verified listings across multiple categories. Filter by product type, specifications, and supplier location to quickly find exactly what meets your business needs.",
    },
    {
      id: 2,
      icon: HelpCircle,
      title: "Send Enquiry",
      description:
        "Select the product you're interested in and send a detailed enquiry directly to the vendor, outlining your requirements, quantity, and any customization preferences.",
    },
    {
      id: 3,
      icon: Percent,
      title: "Get Offers",
      description:
        "Receive personalized quotes and product details from multiple vendors. Compare specifications, pricing, and delivery terms to identify the most suitable supplier for your order.",
    },
    {
      id: 4,
      icon: Handshake,
      title: "Finalize Deal",
      description:
        "Negotiate terms directly with the vendor and arrange delivery. All payments and order confirmations are handled outside the platform for flexibility and control.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
            Start your Buying Journey
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-8 left-32 right-32 h-0.5">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 1"
            >
              <path
                d="M0,0.5 Q25,0.2 50,0.5 T100,0.5"
                stroke="#ACACAC"
                strokeWidth="1"
                strokeDasharray="8,8"
                fill="none"
              />
            </svg>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-dealred" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
