import { Shield, Users, Globe, Star, RotateCcw, Package } from "lucide-react";

export function Services() {
  const features = [
    {
      icon: Shield,
      title: "Verified Trade Confidence",
      description:
        "Boost your credibility instantly with Deal Rockets' Verified Vendor status, assuring buyers of your authenticity, product quality, and commitment to professional business practices.",
    },
    {
      icon: Users,
      title: "Higher Buyer Engagement",
      description:
        "Stand out in search results and attract more serious enquiries by showcasing your verified profile, detailed offerings, and trusted business history.",
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description:
        "Expand your reach with direct exposure to a worldwide network of active buyers, suppliers, and trading partners across multiple industries.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Verified Suppliers",
      description:
        "Work only with carefully vetted vendors to ensure product quality, reliability, and professionalism at every step of your buying journey.",
    },
    {
      icon: Star,
      title: "Quality Control",
      description:
        "Gain confidence in your purchase with sample checks, independent product inspections, and continuous production monitoring before final shipment.",
    },
    {
      icon: RotateCcw,
      title: "Smooth Process",
      description:
        "We simplify the procurement process by coordinating supplier communication, negotiations, shipping arrangements, and documentation handling on your behalf.",
    },
    {
      icon: Package,
      title: "Better Deals",
      description:
        "Access competitive offers from multiple trusted suppliers, giving you the power to negotiate and secure the best value for your order.",
    },
  ];

  return (
    <div className="space-y-24">
      {/* Buyer Protection Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/298a5c42b46049266404df5857bed2a8a5fbdc02?width=1000"
                alt="Buyer Protection"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-heading">
                  Buyer Protection & Dispute Assistance
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    When you make a purchase through Deal Rockets, we understand
                    the importance of trust and reliability in every
                    transaction. If the products you receive are defective,
                    incorrect, damaged, or fail to match the agreed
                    specifications, our team immediately steps in to help you
                    connect directly with the seller and resolve the issue as
                    quickly as possible.
                  </p>

                  <p>
                    This resolution may include arranging a product replacement,
                    initiating corrections to meet agreed standards, or
                    facilitating a mutually agreed refund — all handled directly
                    between you and the seller for maximum control and
                    flexibility.
                  </p>

                  <p>
                    In cases where returns are required, we assist you in
                    navigating the process, helping with clear communication,
                    documentation, and coordination so that you avoid delays and
                    confusion. Our goal is to ensure that any disputes are
                    settled fairly, efficiently, and with your satisfaction as
                    the priority.
                  </p>
                </div>
              </div>

              <button className="bg-dealred text-white px-8 py-3 rounded-full font-bold hover:bg-dealred-600 transition-colors">
                Find trusted deals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Deal Rockets */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
              Why Choose Deal Rockets Trade Assist Program
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-dealred/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-dealred" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-heading">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Tracking */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-heading">
                  Order Tracking & Updates
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    From the moment your order is confirmed, Deal Rockets
                    ensures you're never left in the dark. Our Order Tracking &
                    Updates feature gives you full visibility into your
                    procurement journey, starting from production progress to
                    shipment milestones and final delivery.
                  </p>

                  <p>
                    You'll receive timely updates directly from the seller,
                    including manufacturing timelines, dispatch details,
                    tracking numbers, and estimated arrival dates. In addition,
                    our team is available to help clarify any unexpected delays,
                    changes in schedules, or adjustments to your order.
                  </p>

                  <p>
                    We make sure all communications remain transparent and
                    accurate, eliminating uncertainty and keeping you in control
                    of your order status at every step. Whether it's a bulk
                    shipment across borders or a smaller, specialized delivery,
                    we keep you informed so you can plan your business
                    operations with confidence.
                  </p>
                </div>
              </div>

              <button className="bg-dealred text-white px-8 py-3 rounded-full font-bold hover:bg-dealred-600 transition-colors">
                Track My Order
              </button>
            </div>

            {/* Right - Image */}
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1e97f8ce5a440a9ef41840b2233dbe68d396976d?width=1000"
                alt="Order Tracking"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Assistance Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-4">
              Why Our Assistance Works for You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-dealred/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-dealred" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-heading">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Negotiation Support */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2c9200cb12c42d0f186193cd0d952cee3deb0d87?width=1000"
                alt="Negotiation Support"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-heading">
                  Negotiation Support
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Securing the best value for your procurement is not just
                    about price — it's about getting the right terms, quality,
                    and timelines that meet your exact needs. At Deal Rockets,
                    our Negotiation Support service ensures you have the right
                    tools and assistance to reach an agreement that works in
                    your favor.
                  </p>

                  <p>
                    We facilitate direct, clear discussions between you and the
                    seller, covering key details such as product specifications,
                    quantities, delivery schedules, and final pricing. By
                    helping both parties align on expectations and
                    responsibilities early on, we reduce the risk of
                    misunderstandings that could disrupt your order.
                  </p>

                  <p>
                    Our experienced team can also guide you through
                    counter-offers, specification adjustments, and alternative
                    solutions when challenges arise. The result is a smoother,
                    faster negotiation process that protects your interests,
                    builds strong supplier relationships, and ensures successful
                    deal closures.
                  </p>
                </div>
              </div>

              <button className="bg-dealred text-white px-8 py-3 rounded-full font-bold hover:bg-dealred-600 transition-colors">
                Start Negotiation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
