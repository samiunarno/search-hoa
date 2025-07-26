import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  FileText, 
  CreditCard, 
  Cloud, 
  Users, 
  Lock,
  Download,
  Eye,
  Mail,
  Settings,
  Smartphone,
  Tablet,
  Monitor,
  DollarSign,
  Home,
  Info,
  Phone,
  ArrowRight,
  Database,
  Server
} from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "SearchHOA MVP",
    subtitle: "Visual Functionality Breakdown",
    type: "title"
  },
  {
    id: 2,
    title: "Homepage & Navigation",
    subtitle: "Clean, Professional Interface",
    type: "homepage"
  },
  {
    id: 3,
    title: "Search Functionality",
    subtitle: "Find HOA Bylaws Instantly",
    type: "search"
  },
  {
    id: 4,
    title: "Authentication Flow",
    subtitle: "Guest vs Member Experience",
    type: "auth"
  },
  {
    id: 5,
    title: "PDF Preview & Download",
    subtitle: "Dropbox Integration",
    type: "pdf"
  },
  {
    id: 6,
    title: "Stripe Integration",
    subtitle: "Pay-per-Download & Subscriptions",
    type: "stripe"
  },
  {
    id: 7,
    title: "Wix",
    subtitle: "Data Management Flow",
    type: "admin"
  },
  {
    id: 8,
    title: "Banner Advertising",
    subtitle: "Revenue Generation",
    type: "ads"
  },
  {
    id: 9,
    title: "Responsive Design",
    subtitle: "",
    type: "responsive"
  },
  {
    id: 10,
    title: "Technical Stack",
    subtitle: "Platform & Integration Overview",
    type: "tech"
  },
  {
    id: 11,
    title: "Complete Data Flow Overview",
    subtitle: "End-to-end system architecture visualization",
    type: "dataflow"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    setAnimationPhase(0);
    const timer = setTimeout(() => setAnimationPhase(1), 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];

  const renderSlideContent = () => {
    switch (slide.type) {
      case 'title':
        return <TitleSlide animationPhase={animationPhase} />;
      case 'homepage':
        return <HomepageSlide animationPhase={animationPhase} />;
      case 'search':
        return <SearchSlide animationPhase={animationPhase} />;
      case 'auth':
        return <AuthSlide animationPhase={animationPhase} />;
      case 'pdf':
        return <PDFSlide animationPhase={animationPhase} />;
      case 'stripe':
        return <StripeSlide animationPhase={animationPhase} />;
      case 'admin':
        return <AdminSlide animationPhase={animationPhase} />;
      case 'ads':
        return <AdsSlide animationPhase={animationPhase} />;
      case 'responsive':
        return <ResponsiveSlide animationPhase={animationPhase} />;
      case 'tech':
        return <TechSlide animationPhase={animationPhase} />;
      case 'dataflow':
        return <DataFlowSlide animationPhase={animationPhase} />;
      default:
        return <div>Slide content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">SearchHOA</h1>
          </div>
          <div className="text-sm text-gray-600">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Slide Header */}
          <div className="bg-blue-600 text-white p-6">
            <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
            <p className="text-blue-100 text-lg">{slide.subtitle}</p>
          </div>

          {/* Slide Content */}
          <div className="p-8 min-h-[600px]">
            {renderSlideContent()}
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

const TitleSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="flex flex-col items-center justify-center h-full text-center">
    <div className={`transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-8 mx-auto">
        <Home className="w-12 h-12 text-white" />
      </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-4">SearchHOA</h1>
      <p className="text-xl text-gray-600 mb-8">MVP Functionality Preview</p>
      <div className="flex items-center justify-center space-x-8 text-gray-500">
        <div className="flex items-center space-x-2">
          <Search className="w-6 h-6" />
          <span>Search</span>
        </div>
        <div className="flex items-center space-x-2">
          <FileText className="w-6 h-6" />
          <span>Download</span>
        </div>
        <div className="flex items-center space-x-2">
          <CreditCard className="w-6 h-6" />
          <span>Payment</span>
        </div>
      </div>
    </div>
  </div>
);

const HomepageSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="space-y-8">
    <div className={`transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-800">SearchHOA</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        
        <nav className="flex space-x-6 mb-8 border-b border-gray-300 pb-4">
          {['Home', 'About', 'Search/Download', 'Pricing', 'Contact'].map((tab, index) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-t-lg transition-all duration-500 delay-${index * 100} ${
                animationPhase 
                  ? tab === 'Home' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  : 'opacity-0 translate-y-2'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="text-center py-12">
          <h2 className={`text-3xl font-bold text-gray-800 mb-4 transition-all duration-1000 delay-300 ${
            animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Find Your HOA Bylaws
          </h2>
          <p className={`text-gray-600 mb-8 transition-all duration-1000 delay-500 ${
            animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Access publicly available HOA documents instantly
          </p>
          <div className={`bg-white rounded-lg shadow-md p-6 max-w-md mx-auto transition-all duration-1000 delay-700 ${
            animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter HOA name or county..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SearchSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className={`transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Search Process</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
            <span>User enters HOA name or county</span>
          </div>
          <div className="flex items-center justify-center py-2">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
            <span>System queries database</span>
          </div>
          <div className="flex items-center justify-center py-2">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
            <Eye className="w-6 h-6 text-green-600" />
            <span>PDF preview popup (first 500 characters)</span>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-300 ${animationPhase ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <h3 className="text-xl font-bold text-gray-800 mb-4">No Results Flow</h3>
        <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
          <div className="flex items-center space-x-3 mb-4">
            <Mail className="w-6 h-6 text-orange-600" />
            <span className="font-semibold text-orange-800">Request Form</span>
          </div>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="HOA name"
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              Submit Request
            </button>
          </div>
          <p className="text-sm text-orange-700 mt-2">
            → Triggers email to info@searchhoa.com
          </p>
        </div>
      </div>
    </div>
  </div>
);

const AuthSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className={`transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="w-6 h-6 text-gray-600" />
            <h3 className="text-xl font-bold text-gray-800">Guest User</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span>Can browse and search</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span>View PDF previews</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span>Must sign up to download</span>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 font-medium">
              Sign up required for downloads
            </p>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-300 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <Lock className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-blue-800">Member User</h3>
          </div>
          <ul className="space-y-3 text-blue-700">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Download PDFs</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Payment</span>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PDFSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="space-y-8">
    <div className="text-center mb-8">
      <h3 className={`text-2xl font-bold text-gray-800 mb-4 transition-all duration-1000 ${
        animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        Dropbox Integration Flow
      </h3>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className={`transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Storage</h4>
          <p className="text-sm text-gray-600">PDFs stored in Dropbox using HOA name as key</p>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-300 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-green-50 rounded-lg p-6 text-center">
          <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Preview</h4>
          <p className="text-sm text-gray-600">System fetches and shows preview only</p>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-500 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-purple-50 rounded-lg p-6 text-center">
          <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Download</h4>
          <p className="text-sm text-gray-600">Triggers payment or subscription check</p>
        </div>
      </div>
    </div>

    <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-1000 delay-700 ${
      animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <FileText className="w-6 h-6 text-blue-600" />
          <span className="font-semibold text-gray-800">Sunset Hills HOA Bylaws.pdf</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 h-32 overflow-hidden">
        <p className="text-sm text-gray-600 leading-relaxed">
          BYLAWS OF SUNSET HILLS HOMEOWNERS ASSOCIATION
          
          ARTICLE I - NAME AND LOCATION
          
          The name of this corporation is Sunset Hills Homeowners Association, Inc., hereinafter referred to as the "Association." The principal office of the Association shall be located...
        </p>
      </div>
    </div>
  </div>
);

const StripeSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className={`transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <CreditCard className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold text-green-800">Pay-per-Download</h3>
          </div>
          <div className="text-center py-8">
            <div className="text-4xl font-bold text-green-600 mb-2">$2</div>
            <p className="text-green-700 mb-4">One-time payment</p>
            <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Buy Now
            </button>
          </div>
          <ul className="space-y-2 text-sm text-green-700">
            <li>• Instant PDF download</li>
            <li>• No recurring charges</li>
            <li>• Perfect for one-off needs</li>
          </ul>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-300 ${animationPhase ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              7 Day Free Trial
            </span>
          </div>
          <div className="flex items-center space-x-3 mb-4 mt-4">
            <DollarSign className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-blue-800">Monthly Subscription</h3>
          </div>
          <div className="text-center py-8">
            <div className="text-4xl font-bold text-blue-600 mb-2">$20</div>
            <p className="text-blue-700 mb-4">Per month</p>
            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Start Free Trial
            </button>
          </div>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• Unlimited downloads</li>
            <li>• Priority support</li>
            <li>• Early access to new features</li>
          </ul>
        </div>
      </div>
    </div>

    <div className={`bg-gray-50 rounded-lg p-6 border border-gray-200 transition-all duration-1000 delay-500 ${
      animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <h4 className="font-bold text-gray-800 mb-4 text-center">Stripe Checkout Flow</h4>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm">
          <CreditCard className="w-5 h-5 text-gray-600" />
          <span className="text-sm">Secure Payment</span>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
        <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm">
          <Lock className="w-5 h-5 text-green-600" />
          <span className="text-sm">Processing</span>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
        <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm">
          <Download className="w-5 h-5 text-blue-600" />
          <span className="text-sm">Download</span>
        </div>
      </div>
    </div>
  </div>
);

const AdminSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="space-y-8">
    <div className={`text-center mb-8 transition-all duration-1000 ${
      animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Data Management</h3>
      <p className="text-gray-600">Automated scraper to searchable database flow</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className={`transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-orange-50 rounded-lg p-6 text-center border-2 border-orange-200">
          <FileText className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Scraper Output</h4>
          <p className="text-sm text-gray-600">CSV with HOA Name, Dropbox Path, County, etc.</p>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-200 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-blue-50 rounded-lg p-6 text-center border-2 border-blue-200">
          <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Admin Upload</h4>
          <p className="text-sm text-gray-600">CSV uploaded to Wix system</p>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-400 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-green-50 rounded-lg p-6 text-center border-2 border-green-200">
          <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Database Index</h4>
          <p className="text-sm text-gray-600">Searchable index created automatically</p>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-600 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-purple-50 rounded-lg p-6 text-center border-2 border-purple-200">
          <Search className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h4 className="font-bold text-gray-800 mb-2">Live Search</h4>
          <p className="text-sm text-gray-600">Users can search updated database</p>
        </div>
      </div>
    </div>

    <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-1000 delay-800 ${
      animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <h4 className="font-bold text-gray-800 mb-4">Sample CSV Structure</h4>
      <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 px-3">HOA Name</th>
              <th className="text-left py-2 px-3">County</th>
              <th className="text-left py-2 px-3">Dropbox Path</th>
              <th className="text-left py-2 px-3">Last Updated</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">Sunset Hills HOA</td>
              <td className="py-2 px-3">Orange County</td>
              <td className="py-2 px-3">/hoa-docs/sunset-hills-bylaws.pdf</td>
              <td className="py-2 px-3">2024-01-15</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">Pine Valley Community</td>
              <td className="py-2 px-3">Los Angeles</td>
              <td className="py-2 px-3">/hoa-docs/pine-valley-rules.pdf</td>
              <td className="py-2 px-3">2024-01-12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AdsSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="space-y-8">
    <div className={`text-center mb-8 transition-all duration-1000 ${
      animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Banner Advertising Revenue</h3>
      <p className="text-gray-600">Strategic ad placement for additional income</p>
    </div>

    <div className="space-y-6">
      <div className={`transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-yellow-800">Header Banner</span>
            <div className="text-xs text-yellow-600">728x90</div>
          </div>
          <div className="mt-2 bg-yellow-200 rounded h-16 flex items-center justify-center">
            <span className="text-yellow-700 font-medium">Advertisement Space</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-lg shadow-md p-6 h-64">
            <h4 className="font-semibold text-gray-800 mb-4">Main Content Area</h4>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>

        <div className={`space-y-4 transition-all duration-1000 delay-300 ${animationPhase ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-800">Sidebar Top</span>
              <div className="text-xs text-blue-600">300x250</div>
            </div>
            <div className="bg-blue-200 rounded h-20 flex items-center justify-center">
              <span className="text-blue-700 text-sm">Ad Space</span>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-green-800">Sidebar Bottom</span>
              <div className="text-xs text-green-600">300x150</div>
            </div>
            <div className="bg-green-200 rounded h-16 flex items-center justify-center">
              <span className="text-green-700 text-sm">Ad Space</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-500 ${animationPhase ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-purple-800">Footer Banner</span>
            <div className="text-xs text-purple-600">728x90</div>
          </div>
          <div className="mt-2 bg-purple-200 rounded h-16 flex items-center justify-center">
            <span className="text-purple-700 font-medium">Advertisement Space</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ResponsiveSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="space-y-8">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className={`transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-gray-800 rounded-lg p-4 mx-auto" style={{ width: '280px', height: '500px' }}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Smartphone className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Mobile</span>
          </div>
          <div className="bg-white rounded h-full p-3">
            <div className="text-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded mx-auto mb-2"></div>
              <div className="text-xs font-bold">SearchHOA</div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="bg-blue-50 rounded p-2 mb-3">
              <div className="h-6 bg-white rounded border flex items-center px-2">
                <Search className="w-3 h-3 text-gray-400" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-8 bg-gray-100 rounded"></div>
              <div className="h-8 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">&lt; 768px</p>
      </div>

      <div className={`transition-all duration-1000 delay-200 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-gray-800 rounded-lg p-4 mx-auto" style={{ width: '400px', height: '300px' }}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Tablet className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Tablet</span>
          </div>
          <div className="bg-white rounded h-full p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span className="text-xs font-bold">SearchHOA</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-12 h-4 bg-gray-200 rounded text-xs"></div>
                <div className="w-12 h-4 bg-gray-200 rounded text-xs"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="col-span-2">
                <div className="h-6 bg-blue-50 rounded border flex items-center px-2">
                  <Search className="w-3 h-3 text-gray-400" />
                </div>
              </div>
              <div className="h-6 bg-blue-600 rounded"></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-16 bg-gray-100 rounded"></div>
              <div className="h-16 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">768-1024px</p>
      </div>

      <div className={`transition-all duration-1000 delay-400 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-gray-800 rounded-lg p-4 mx-auto" style={{ width: '500px', height: '300px' }}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Monitor className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Desktop</span>
          </div>
          <div className="bg-white rounded h-full p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span className="text-xs font-bold">SearchHOA</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-12 h-4 bg-gray-200 rounded"></div>
                <div className="w-12 h-4 bg-gray-200 rounded"></div>
                <div className="w-12 h-4 bg-gray-200 rounded"></div>
                <div className="w-12 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="col-span-2">
                <div className="h-6 bg-blue-50 rounded border flex items-center px-2">
                  <Search className="w-3 h-3 text-gray-400" />
                </div>
              </div>
              <div className="h-6 bg-blue-600 rounded"></div>
              <div></div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 space-y-2">
                <div className="h-12 bg-gray-100 rounded"></div>
                <div className="h-12 bg-gray-100 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-yellow-100 rounded"></div>
                <div className="h-8 bg-blue-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">&gt; 1024px</p>
      </div>
    </div>
  </div>
);

const TechSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="space-y-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className={`space-y-6 transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div>
              <h4 className="font-bold text-blue-800">Wix Platform</h4>
              <p className="text-sm text-blue-600">Primary hosting & CMS</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• Wix Velo for custom backend</li>
            <li>• Wix Members for authentication</li>
            <li>• Built-in responsive design</li>
            <li>• Easy content management</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <CreditCard className="w-10 h-10 text-green-600" />
            <div>
              <h4 className="font-bold text-green-800">Stripe Integration</h4>
              <p className="text-sm text-green-600">Payment processing</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-green-700">
            <li>• Secure payment handling</li>
            <li>• Subscription management</li>
            <li>• One-time payments</li>
            <li>• Webhook integration</li>
          </ul>
        </div>
      </div>

      <div className={`space-y-6 transition-all duration-1000 delay-300 ${animationPhase ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <Cloud className="w-10 h-10 text-purple-600" />
            <div>
              <h4 className="font-bold text-purple-800">Dropbox API</h4>
              <p className="text-sm text-purple-600">File storage & retrieval</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-purple-700">
            <li>• PDF document storage</li>
            <li>• Dynamic file fetching</li>
            <li>• Preview generation</li>
            <li>• Secure file access</li>
          </ul>
        </div>
      </div>
    </div>

    <div className={`bg-gray-50 rounded-lg p-6 border border-gray-200 transition-all duration-1000 delay-500 ${
      animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <h4 className="font-bold text-gray-800 mb-6 text-center">Integration Flow</h4>
      <div className="flex items-center justify-center space-x-4 overflow-x-auto">
        <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-lg whitespace-nowrap">
          <span className="font-semibold text-blue-800">Wix Frontend</span>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
        <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-lg whitespace-nowrap">
          <span className="font-semibold text-blue-800">Wix Velo Backend</span>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
        <div className="flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-lg whitespace-nowrap">
          <span className="font-semibold text-purple-800">Dropbox API</span>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
        <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-lg whitespace-nowrap">
          <span className="font-semibold text-green-800">Stripe</span>
        </div>
      </div>
    </div>
  </div>
);

const DataFlowSlide = ({ animationPhase }: { animationPhase: number }) => (
  <div className="space-y-8">
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className={`text-center transition-all duration-1000 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-bold text-gray-800 mb-2">User Input</h4>
          <p className="text-sm text-gray-600">HOA name or county search</p>
        </div>

        <div className="flex items-center justify-center">
          <ArrowRight className={`w-8 h-8 text-gray-400 transition-all duration-1000 delay-200 ${
            animationPhase ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} />
        </div>

        <div className={`text-center transition-all duration-1000 delay-300 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-bold text-gray-800 mb-2">Search Engine</h4>
          <p className="text-sm text-gray-600">Query database index</p>
        </div>

        <div className="flex items-center justify-center">
          <ArrowRight className={`w-8 h-8 text-gray-400 transition-all duration-1000 delay-500 ${
            animationPhase ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} />
        </div>

        <div className={`text-center transition-all duration-1000 delay-600 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Cloud className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-bold text-gray-800 mb-2">Dropbox Fetch</h4>
          <p className="text-sm text-gray-600">Retrieve PDF file</p>
        </div>
      </div>

      <div className="flex items-center justify-center my-8">
        <div className={`w-2 h-2 bg-gray-400 rounded-full transition-all duration-1000 delay-800 ${
          animationPhase ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className={`w-16 h-0.5 bg-gray-400 transition-all duration-1000 delay-900 ${
          animationPhase ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}></div>
        <div className={`w-2 h-2 bg-gray-400 rounded-full transition-all duration-1000 delay-1000 ${
          animationPhase ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`text-center transition-all duration-1000 delay-1100 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-bold text-gray-800 mb-2">Preview Logic</h4>
          <p className="text-sm text-gray-600">Show first 500 characters</p>
        </div>

        <div className={`text-center transition-all duration-1000 delay-1200 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-bold text-gray-800 mb-2">Payment Gateway</h4>
          <p className="text-sm text-gray-600">Stripe checkout process</p>
        </div>

        <div className={`text-center transition-all duration-1000 delay-1300 ${animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-bold text-gray-800 mb-2">Download</h4>
          <p className="text-sm text-gray-600">Deliver PDF to user</p>
        </div>
      </div>
    </div>

    <div className={`bg-blue-600 text-white rounded-lg p-8 text-center transition-all duration-1000 delay-1500 ${
      animationPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <h2 className="text-3xl font-bold mb-4">SearchHOA</h2>
      <p className="text-xl text-blue-100">MVP Functionality Preview</p>
      <div className="mt-6 flex items-center justify-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-blue-100">Fully Responsive</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-blue-100">Payment Ready</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-blue-100">Scalable Architecture</span>
        </div>
      </div>
    </div>
  </div>
);

export default App;