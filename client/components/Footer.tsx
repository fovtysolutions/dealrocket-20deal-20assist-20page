import {
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Store,
  FileText,
  Shield,
  Phone,
} from "lucide-react";

export function Footer() {
  const productCategories = [
    {
      title: "Security & Protection",
      items: ["Home Security", "Workplace Safety", "Personal Safety"],
      hasMore: true,
    },
    {
      title: "Health & Medical",
      items: [
        "Emergency Survival Backpack",
        "Family Emergency Preparedness Kit",
        "First-Aid Emergency Kit",
        "Comprehensive First Aid Kit",
      ],
    },
    {
      title: "Lights & Lighting",
      items: [
        "Solar Garden Lights",
        "LED String Lights",
        "LED Floor Lamps",
        "Modern LED Table Lamps",
      ],
    },
    {
      title: "Measurement & Analysis Instruments",
      items: [
        "Compact Laser Level",
        "Advanced Laser Distance Measure",
        "Precision Measuring Instruments",
        "Advanced Measuring Tools",
      ],
    },
    {
      title: "Sports & Entertainment",
      hasMore: true,
    },
  ];

  const industriesCategories = [
    {
      title: "Electrical Equipment",
      items: [
        "Smart Thermostat",
        "Energy-Efficient LED Bulbs",
        "Smart Home Light Bulbs",
      ],
    },
    {
      title: "Home and Garden",
      items: [
        "Quality Gardening Fork",
        "High-Quality Gardening Gloves",
        "Gardening Tools Set",
        "All-in-One Gardening Tools",
      ],
    },
    {
      title: "Luggage, Bags & Cases",
      items: [
        "Lightweight Travel Pillow",
        "Foldable Travel Backpack",
        "Durable Travel Suitcase",
      ],
    },
    {
      title: "Office & School Supplies",
      items: [
        "Creative Art Supplies",
        "School Supply Bundle",
        "Premium Student Supplies",
        "Stationery Supplies for Students",
      ],
    },
    {
      title: "Toys & Hobbies",
      hasMore: true,
    },
  ];

  const footerLinks = {
    special: [
      "Featured Products",
      "Latest Products",
      "Best Selling Products",
      "Top Rated Products",
    ],
    account: ["Profile Info", "Wish list", "Track Order"],
    shipping: ["Refund policy", "Return policy", "Cancellation policy"],
    help: ["About us", "Contact Us", "HelpTopic", "Support ticket"],
  };

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Products Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold text-secondary-text">
                Our Products
              </h3>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {productCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-secondary-text text-sm uppercase tracking-wide">
                      {category.title}
                    </h4>
                    {category.hasMore && (
                      <span className="text-xs text-primary-text">
                        See more
                      </span>
                    )}
                  </div>
                  {category.items && (
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-xs text-primary-text leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold text-secondary-text">
                Our Industries
              </h3>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {industriesCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-secondary-text text-sm uppercase tracking-wide">
                      {category.title}
                    </h4>
                    {category.hasMore && (
                      <span className="text-xs text-primary-text">
                        See more
                      </span>
                    )}
                  </div>
                  {category.items && (
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-xs text-primary-text leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-semibold text-secondary-text mb-6 uppercase tracking-wide">
              Special
            </h4>
            <ul className="space-y-3">
              {footerLinks.special.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-secondary-text hover:text-dealred text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-secondary-text mb-6 uppercase tracking-wide">
              Account Info
            </h4>
            <ul className="space-y-3">
              {footerLinks.account.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-secondary-text hover:text-dealred text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-secondary-text mb-6 uppercase tracking-wide">
              Shipping Info
            </h4>
            <ul className="space-y-3">
              {footerLinks.shipping.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-secondary-text hover:text-dealred text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-secondary-text mb-6 uppercase tracking-wide">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-secondary-text hover:text-dealred text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Mail Us */}
          <div>
            <h4 className="text-xl font-semibold text-heading mb-6 uppercase tracking-wide">
              Mail Us
            </h4>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-text" />
              <span className="text-secondary-text">
                contact@fovtysolutions.com
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-semibold text-heading mb-6 uppercase tracking-wide">
              Social
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 hover:scale-110 transition-transform"
              >
                <Twitter className="w-full h-full text-primary-text hover:text-dealred" />
              </a>
              <a
                href="#"
                className="w-8 h-8 hover:scale-110 transition-transform"
              >
                <Linkedin className="w-full h-full text-primary-text hover:text-dealred" />
              </a>
              <a
                href="#"
                className="w-8 h-8 hover:scale-110 transition-transform"
              >
                <Instagram className="w-full h-full text-primary-text hover:text-dealred" />
              </a>
              <a
                href="#"
                className="w-8 h-8 hover:scale-110 transition-transform"
              >
                <Facebook className="w-full h-full text-primary-text hover:text-dealred" />
              </a>
            </div>
          </div>

          {/* Registered Office */}
          <div>
            <h4 className="text-xl font-semibold text-heading mb-6 uppercase tracking-wide">
              Registered Office Address
            </h4>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary-text" />
              <span className="text-secondary-text">India</span>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Explore More */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-xl font-semibold text-secondary-text">
                Explore More
              </h4>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Store className="w-5 h-5 text-primary-text" />
                <span className="text-secondary-text text-sm">
                  Become a Seller
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-text" />
                <span className="text-secondary-text text-sm">
                  Terms & Conditions
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-text" />
                <span className="text-secondary-text text-sm">
                  Privacy policy
                </span>
              </div>
            </div>
          </div>

          {/* About Company */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-xl font-semibold text-secondary-text">
                About Company
              </h4>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <span className="text-secondary-text text-sm">
                  CopyRight DealRabbit@2024
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-text" />
                <span className="text-secondary-text text-sm">
                  +971551582756
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-300">
          <p className="text-sm text-primary-text">
            © 2024 Deal Rockets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
