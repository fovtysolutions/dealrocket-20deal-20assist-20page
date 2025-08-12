import { Search, Globe, MessageCircle, HelpCircle, ChevronDown, Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-stroke sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-stroke">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/2fd2f57b4d9391a38f5b3476e18ae588a2a5362c?width=440" 
                alt="Deal Rockets" 
                className="h-11 w-auto"
              />
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <div className="flex">
                  <div className="bg-gradient-to-r from-dealred to-dealred-900 text-white px-6 py-2.5 rounded-l-full flex items-center gap-2 font-semibold">
                    All Categories
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Search for products..."
                      className="w-full px-6 py-2.5 border border-dealred border-l-0 rounded-r-full focus:outline-none focus:ring-2 focus:ring-dealred focus:border-transparent"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <button className="bg-gradient-to-r from-dealred to-dealred-900 text-white px-8 py-1.5 rounded-full text-sm font-semibold hover:shadow-lg transition-shadow">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-6">
                <div className="flex flex-col items-center text-sm text-primary-text hover:text-dealred cursor-pointer">
                  <div className="w-4 h-4 mb-1">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12L15 7H5l5 5z"/>
                    </svg>
                  </div>
                  <span>Features</span>
                </div>
                
                <div className="flex flex-col items-center text-sm text-primary-text hover:text-dealred cursor-pointer">
                  <MessageCircle className="w-4 h-4 mb-1" />
                  <span>Message</span>
                </div>
                
                <div className="flex flex-col items-center text-sm text-primary-text hover:text-dealred cursor-pointer group">
                  <HelpCircle className="w-4 h-4 mb-1" />
                  <div className="flex items-center gap-1">
                    <span>Help</span>
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-sm text-primary-text hover:text-dealred cursor-pointer group">
                  <Globe className="w-4 h-4 mb-1" />
                  <div className="flex items-center gap-1">
                    <span>English</span>
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </div>
              </div>
              
              <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-b border-stroke shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-14 overflow-x-auto">
            <nav className="flex items-center space-x-8 min-w-max">
              <div className="flex flex-col items-center text-sm text-primary-text hover:text-dealred cursor-pointer py-2 border-b-2 border-transparent hover:border-dealred transition-colors">
                <div className="w-5 h-5 mb-1">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 9v8a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V9l-7-7z"/>
                  </svg>
                </div>
                <span>Home</span>
              </div>

              <div className="flex flex-col items-center text-sm text-primary-text hover:text-dealred cursor-pointer py-2 border-b-2 border-transparent hover:border-dealred transition-colors">
                <div className="w-5 h-5 mb-1">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                  </svg>
                </div>
                <span>Stock Sale</span>
              </div>

              <div className="flex flex-col items-center text-sm text-primary-text hover:text-dealred cursor-pointer py-2 border-b-2 border-transparent hover:border-dealred transition-colors">
                <div className="w-5 h-5 mb-1">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <span>Buy Leads</span>
              </div>

              <div className="flex flex-col items-center text-sm text-dealred cursor-pointer py-2 border-b-2 border-dealred">
                <div className="w-5 h-5 mb-1">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span className="font-semibold">Marketplace</span>
              </div>

              <div className="flex flex-col items-center text-sm text-primary-text hover:text-dealred cursor-pointer py-2 border-b-2 border-transparent hover:border-dealred transition-colors">
                <div className="w-5 h-5 mb-1">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                  </svg>
                </div>
                <span>Sell Offer</span>
              </div>

              <div className="flex flex-col items-center text-sm text-dealred cursor-pointer py-2 border-b-2 border-dealred">
                <div className="w-5 h-5 mb-1 text-dealred">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </div>
                <span className="font-semibold text-dealred">Deal Assist</span>
              </div>

              <div className="flex flex-col items-center text-sm text-primary-text hover:text-dealred cursor-pointer py-2 border-b-2 border-transparent hover:border-dealred transition-colors">
                <div className="w-5 h-5 mb-1">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span>Industry Jobs</span>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stroke">
          <div className="px-4 py-4 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-stroke rounded-lg focus:outline-none focus:ring-2 focus:ring-dealred"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-primary-text">
                <MessageCircle className="w-4 h-4" />
                <span>Message</span>
              </div>
              <div className="flex items-center gap-2 text-primary-text">
                <HelpCircle className="w-4 h-4" />
                <span>Help</span>
              </div>
              <div className="flex items-center gap-2 text-primary-text">
                <Globe className="w-4 h-4" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
