/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Tv, 
  Lightbulb, 
  Store, 
  Wrench, 
  PaintBucket, 
  Hammer, 
  Layout, 
  Zap, 
  Construction, 
  CheckCircle2, 
  Star, 
  Phone, 
  Clock, 
  MapPin,
  ChevronRight,
  Quote,
  ShieldCheck,
  BadgeCheck,
  Timer,
  ArrowRight,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const SERVICES = [
  { icon: Tv, title: "TV Mounting", desc: "Precision mounting for any screen size on any wall surface. Clean, wire-free finish guaranteed." },
  { icon: Lightbulb, title: "Lighting Installation", desc: "From elegant chandeliers to modern recessed lighting. Indoor and outdoor brilliance." },
  { icon: Zap, title: "Patio Lighting", desc: "Transform your outdoor living space with custom-designed atmospheric lighting." },
  { icon: Wrench, title: "General Repairs", desc: "Expert solutions for those nagging home issues. No job is too small for our attention." },
  { icon: Layout, title: "Drywall Repair", desc: "Seamless patching, sanding, and texture matching. We make holes disappear." },
  { icon: PaintBucket, title: "Professional Painting", desc: "Interior and exterior refreshes with premium finishes and meticulous prep work." },
  { icon: Hammer, title: "Minor Carpentry", desc: "Custom shelving, trim work, and wood repairs that add character to your home." },
  { icon: Construction, title: "Home Improvement", desc: "Strategic upgrades that enhance your lifestyle and increase your property value." },
  { icon: Layout, title: "Small Remodels", desc: "Kitchen and bathroom updates delivered with high-end craftsmanship." },
  { icon: Store, title: "Storefront Buildouts", desc: "Commercial spaces transformed on schedule and within budget for Phoenix businesses." },
  { icon: Hammer, title: "Furniture Assembly", desc: "Skip the frustration. We assemble complex furniture quickly and correctly." },
  { icon: Zap, title: "Electrical Fixtures", desc: "Safe installation of ceiling fans, outlets, and modern smart home fixtures." },
];

const WHY_CHOOSE_US = [
  { icon: Star, title: "4.9/5 Rating", desc: "Backed by 56+ verified 5-star reviews from your Phoenix neighbors." },
  { icon: ShieldCheck, title: "Fully Professional", desc: "Responsible, punctual, and dedicated to the highest standards of craftsmanship." },
  { icon: BadgeCheck, title: "Quality Guaranteed", desc: "We don't just fix things; we ensure they stay fixed with premium materials." },
  { icon: Timer, title: "On-Time Delivery", desc: "We respect your time. Projects are completed on schedule, every single time." },
];

const TESTIMONIALS = [
  {
    name: "Gary Dias",
    avatar: "https://i.pravatar.cc/150?u=gary",
    text: "ATR mounted our TV and installed patio lighting. Professional, punctual and truly high-quality work. We will definitely hire them again.",
    rating: 5
  },
  {
    name: "Brittney Alexander",
    avatar: "https://i.pravatar.cc/150?u=brittney",
    text: "ATR did my storefront buildout. They finished everything on schedule with excellent craftsmanship. Highly recommended for any job, big or small.",
    rating: 5
  },
  {
    name: "Jessica Deane",
    avatar: "https://i.pravatar.cc/150?u=jessica",
    text: "After dealing with overpriced and disappointing companies, ATR was a breath of fresh air. Honest pricing, excellent work, and extremely reliable.",
    rating: 5
  }
];

const PORTFOLIO = [
  { title: "TV Mounting", category: "Installation", img: "https://picsum.photos/seed/tvmount/600/400" },
  { title: "Storefront Buildout", category: "Commercial", img: "https://picsum.photos/seed/storefront/600/400" },
  { title: "Patio Lighting", category: "Outdoor", img: "https://picsum.photos/seed/patiolight/600/400" },
  { title: "Kitchen Refresh", category: "Remodel", img: "https://picsum.photos/seed/kitchen/600/400" },
  { title: "Custom Shelving", category: "Carpentry", img: "https://picsum.photos/seed/shelves/600/400" },
  { title: "Modern Fixtures", category: "Electrical", img: "https://picsum.photos/seed/fixtures/600/400" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-header py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-brand-blue p-2.5 rounded-2xl shadow-lg shadow-brand-blue/20">
            <Wrench className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-extrabold tracking-tighter leading-none ${isScrolled ? 'text-brand-blue' : 'text-brand-blue'}`}>ATR <span className="text-brand-accent">HANDYMAN</span></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mt-1">Phoenix, Arizona</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-600">
          <a href="#services" className="hover:text-brand-accent transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
          <a href="#portfolio" className="hover:text-brand-accent transition-colors">Portfolio</a>
          <a href="#testimonials" className="hover:text-brand-accent transition-colors">Reviews</a>
          <a href="tel:+16025452221" className="btn-premium-primary py-3 px-8">
            <Phone className="w-4 h-4" />
            602-545-2221
          </a>
        </div>

        <button className="md:hidden text-brand-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-brand-blue">Services</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-brand-blue">About</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-brand-blue">Portfolio</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-brand-blue">Reviews</a>
            <a href="tel:+16025452221" className="btn-premium-primary w-full">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 skew-x-12 translate-x-20 hidden lg:block" />
    
    <div className="section-container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="badge-gold">
            <Star className="w-3 h-3 fill-current" />
            4.9 Rating
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">56 Verified Reviews</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.95] mb-8 text-brand-blue">
          Trusted Handyman <br />
          <span className="text-gradient">Services in Phoenix</span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed">
          From small repairs to major projects, ATR Handyman delivers reliable craftsmanship backed by a 4.9-star reputation. Quality work at a fair price.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="tel:+16025452221" className="btn-premium-primary h-16 px-10">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <button className="btn-premium-outline h-16 px-10">
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-16 flex items-center gap-8 grayscale opacity-50">
          <div className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Serving Phoenix, AZ</div>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white">
          <img 
            src="https://picsum.photos/seed/handyman-hero/800/1000" 
            alt="Professional Handyman at Work" 
            className="w-full aspect-[4/5] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Floating Stats Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute -bottom-10 -left-10 z-20 premium-card p-8 max-w-[280px]"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center">
              <BadgeCheck className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <div className="text-2xl font-black text-brand-blue">100%</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Satisfaction</div>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            We take pride in our work. Every project is completed to the highest standards.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="bg-white overflow-hidden">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-xs font-black text-brand-accent uppercase tracking-[0.4em] mb-6">Why Choose Us</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-10 leading-tight">
            The Gold Standard for <br />
            <span className="text-slate-400">Home Repairs in Phoenix</span>
          </h3>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            We've built our reputation on honesty, transparency, and unmatched skill. Whether it's a 15-minute fix or a multi-day buildout, you get our full expertise.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {WHY_CHOOSE_US.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-brand-accent/5 rounded-[60px] -rotate-3" />
          <img 
            src="https://picsum.photos/seed/quality/800/800" 
            alt="Quality Workmanship" 
            className="relative z-10 rounded-[60px] shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="bg-slate-50">
    <div className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-xs font-black text-brand-accent uppercase tracking-[0.4em] mb-6">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-brand-blue leading-tight">
            Comprehensive Solutions <br />
            <span className="text-slate-400">For Every Project</span>
          </h3>
        </div>
        <a href="tel:+16025452221" className="btn-premium-outline">
          View All Services
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="premium-card p-10 group"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-blue transition-colors duration-500">
              <service.icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-500" />
            </div>
            <h4 className="text-2xl font-bold text-brand-blue mb-4">{service.title}</h4>
            <p className="text-slate-500 mb-8 leading-relaxed">{service.desc}</p>
            <button className="font-bold text-sm uppercase tracking-widest text-brand-accent flex items-center gap-2 group-hover:gap-4 transition-all">
              Request Service <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="bg-white">
    <div className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-xs font-black text-brand-accent uppercase tracking-[0.4em] mb-6">Our Work</h2>
        <h3 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-8">Craftsmanship in Action</h3>
        <p className="text-lg text-slate-500">
          A glimpse into the diverse projects we've completed across Phoenix. From residential repairs to commercial buildouts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-pointer rounded-[32px] overflow-hidden aspect-[4/5]"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">{item.category}</span>
              <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-brand-blue" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="bg-brand-blue text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[120px]" />
    </div>

    <div className="section-container relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-xs font-black text-brand-accent uppercase tracking-[0.4em] mb-6">Testimonials</h2>
        <h3 className="text-4xl md:text-6xl font-extrabold mb-8">What Your Neighbors Say</h3>
        <div className="flex items-center justify-center gap-4">
          <div className="flex text-brand-gold">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <span className="text-lg font-bold">4.9/5 Average Rating</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {TESTIMONIALS.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[40px] relative"
          >
            <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5" />
            <p className="text-xl text-slate-300 italic mb-10 leading-relaxed">"{t.text}"</p>
            
            <div className="flex items-center gap-5">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-white/10" />
              <div>
                <div className="font-bold text-lg">{t.name}</div>
                <div className="text-xs font-bold text-brand-accent uppercase tracking-widest">Verified Client</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="bg-white">
    <div className="section-container">
      <div className="bg-brand-blue rounded-[60px] p-16 md:p-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/cta-bg/1200/800" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-accent/50" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-extrabold mb-10 leading-[1.1]">
            Ready to Fix, Upgrade or <br />
            <span className="text-brand-accent">Transform Your Home?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            Don't settle for average. Get the professional craftsmanship your home deserves. Call ATR Handyman today for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+16025452221" className="btn-premium-primary h-20 px-12 text-lg bg-white text-brand-blue hover:bg-slate-100">
              <Phone className="w-6 h-6" />
              Call +1 602-545-2221
            </a>
            <button className="btn-premium-outline h-20 px-12 text-lg border-white/20 text-white hover:bg-white/10">
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
      <div className="lg:col-span-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-brand-accent p-2.5 rounded-2xl">
            <Wrench className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tighter text-white">ATR <span className="text-brand-accent">HANDYMAN</span></span>
        </div>
        <p className="text-sm leading-relaxed mb-8 max-w-xs">
          The premier choice for professional handyman services in Phoenix, AZ. Quality craftsmanship, honest pricing, and reliable service since day one.
        </p>
        <div className="flex gap-4">
          {[Star, MapPin, Phone].map((Icon, i) => (
            <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-all cursor-pointer group">
              <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Information</h4>
        <ul className="space-y-6 text-sm">
          <li className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-brand-accent shrink-0" />
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs uppercase font-bold mb-1">Phone</span>
              <a href="tel:+16025452221" className="text-white font-bold hover:text-brand-accent transition-colors">+1 602-545-2221</a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs uppercase font-bold mb-1">Location</span>
              <span className="text-white font-bold">Phoenix, Arizona</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Clock className="w-5 h-5 text-brand-accent shrink-0" />
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs uppercase font-bold mb-1">Hours</span>
              <span className="text-white font-bold">Open until 6:00 PM</span>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Service Areas</h4>
        <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
          <li className="hover:text-white transition-colors cursor-pointer">Phoenix</li>
          <li className="hover:text-white transition-colors cursor-pointer">Scottsdale</li>
          <li className="hover:text-white transition-colors cursor-pointer">Tempe</li>
          <li className="hover:text-white transition-colors cursor-pointer">Mesa</li>
          <li className="hover:text-white transition-colors cursor-pointer">Glendale</li>
          <li className="hover:text-white transition-colors cursor-pointer">Chandler</li>
          <li className="hover:text-white transition-colors cursor-pointer">Gilbert</li>
          <li className="hover:text-white transition-colors cursor-pointer">Peoria</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Navigation</h4>
        <ul className="space-y-4 text-sm font-medium">
          <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
          <li><a href="#about" className="hover:text-white transition-colors">About ATR</a></li>
          <li><a href="#portfolio" className="hover:text-white transition-colors">Recent Work</a></li>
          <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-[10px] uppercase font-bold tracking-[0.3em]">
        © {new Date().getFullYear()} ATR Handyman. Crafted for Excellence.
      </div>
      <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest">
        <span className="hover:text-white cursor-pointer">Terms</span>
        <span className="hover:text-white cursor-pointer">Privacy</span>
        <span className="hover:text-white cursor-pointer">Sitemap</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}


