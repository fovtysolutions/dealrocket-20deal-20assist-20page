export function HowToJoin() {
  const steps = [
    {
      id: 1,
      title: "Create Your Free Account",
      description:
        "Sign up on Deal Rockets and set up your business profile with all the essential details buyers need to know.",
    },
    {
      id: 2,
      title: "Get Verified & Listed",
      description:
        "Complete our quick verification process to become a trusted seller and have your products listed for global visibility.",
    },
    {
      id: 3,
      title: "Start Receiving Enquiries",
      description:
        "Connect with genuine buyers worldwide, negotiate deals, and grow your trade network — all in one secure platform.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
            How to Join Deal Rockets Trade Assist Program
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
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => (
              <div key={step.id} className="text-center space-y-6">
                {/* Number */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-heading">
                      {step.id}
                    </span>
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
