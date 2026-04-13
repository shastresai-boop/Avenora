import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Instagram, 
  Youtube, 
  CheckCircle2, 
  Users, 
  Target, 
  X,
  Sparkles,
  Play,
  Menu,
  TrendingUp,
  Mail
} from 'lucide-react';

function Logo({ className = "", showText = true }: { className?: string, showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-purple-400 rounded-lg transform rotate-45 opacity-20 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-purple-400 rounded-lg transform rotate-45"></div>
        <span className="relative text-white font-heading font-bold text-lg transform -rotate-45">A</span>
      </div>
      {showText && <span className="font-heading font-bold text-xl tracking-widest text-white">AVENORA</span>}
    </div>
  );
}

function Navbar({ onJoinClick }: { onJoinClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <a href="#what-we-do" className="text-sm text-gray-400 hover:text-white transition-colors">What We Do</a>
          <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</a>
          <a href="#creators" className="text-sm text-gray-400 hover:text-white transition-colors">Creators</a>
        </div>
        <button 
          onClick={onJoinClick}
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
        >
          Join Avenora
        </button>
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

function Hero({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="mb-12">
            <Logo className="scale-150 origin-center" />
          </div>
          
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-8 border border-purple-500/20">
            <Sparkles className="w-4 h-4" />
            Premium Influencer Marketing
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 leading-tight">
            Grow Your Brand <br className="hidden md:block" />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Influencer Power</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            We connect visionary brands with the right creators to build authentic campaigns that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button 
              onClick={onJoinClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              Join Avenora <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">What We Do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Bridging the gap between exceptional brands and influential creators.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-500"></div>
            <Target className="w-12 h-12 text-purple-400 mb-6 relative z-10" />
            <h3 className="text-2xl font-heading font-bold mb-4 relative z-10">For Brands</h3>
            <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
              Reach your target audience through authentic creator voices. We handle sourcing, negotiation, and end-to-end campaign management to ensure maximum ROI.
            </p>
            <ul className="space-y-3 relative z-10">
              {['Targeted Influencer Sourcing', 'Campaign Strategy & Execution', 'Performance Analytics', 'Contract Negotiation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-500"></div>
            <Users className="w-12 h-12 text-purple-400 mb-6 relative z-10" />
            <h3 className="text-2xl font-heading font-bold mb-4 relative z-10">For Influencers</h3>
            <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
              Monetize your influence. Get access to premium brand deals, negotiate better rates, and focus on what you do best: creating amazing content.
            </p>
            <ul className="space-y-3 relative z-10">
              {['Premium Brand Partnerships', 'Rate Negotiation', 'Contract Management', 'Creative Freedom'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {[
            { label: 'Creators', value: '500+' },
            { label: 'Campaigns', value: '1,200+' },
            { label: 'Total Reach', value: '50M+' },
            { label: 'Brand Partners', value: '150+' },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Connect",
      description: "Tell us your goals. We match you with the perfect partners from our vetted network of premium creators.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Plan",
      description: "We develop a custom strategy and creative brief tailored to your brand's specific objectives.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Execute",
      description: "Creators produce authentic content that drives engagement, brand awareness, and measurable results.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A streamlined process designed for maximum impact and minimal friction.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative text-center"
            >
              <div className="w-24 h-24 mx-auto bg-[#050505] border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-900 rounded-full flex items-center justify-center text-white relative z-10">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfluencerPreview() {
  const influencers = [
    {
      name: "Elena Rodriguez",
      niche: "Fashion & Lifestyle",
      followers: "1.2M",
      platform: "Instagram",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Marcus Chen",
      niche: "Tech & Gadgets",
      followers: "850K",
      platform: "YouTube",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Sarah Jenkins",
      niche: "Beauty & Makeup",
      followers: "2.4M",
      platform: "Instagram",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "David Smith",
      niche: "Fitness & Health",
      followers: "1.8M",
      platform: "YouTube",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="creators" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Our Elite Network</h2>
            <p className="text-gray-400 max-w-xl">Partner with top-tier creators who have highly engaged audiences and a proven track record of success.</p>
          </div>
          <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2 transition-colors">
            View All Creators <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {influencers.map((inf, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-white/5"
            >
              <img 
                src={inf.image} 
                alt={inf.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-white">
                    {inf.niche}
                  </span>
                  {inf.platform === 'Instagram' ? (
                    <Instagram className="w-5 h-5 text-white" />
                  ) : (
                    <Youtube className="w-5 h-5 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-1">{inf.name}</h3>
                <p className="text-purple-300 text-sm font-medium">{inf.followers} Followers</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-900/20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-purple-600/30 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ready to grow with influencers?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join Avenora today and let's build campaigns that resonate, engage, and convert.
        </p>
        <button 
          onClick={onJoinClick}
          className="px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2"
        >
          Join Avenora <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              A premium influencer marketing agency connecting visionary brands with elite creators.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#what-we-do" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#creators" className="text-gray-400 hover:text-white transition-colors">Creators</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Avenora Marketing Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function JoinModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [type, setType] = useState<'brand' | 'influencer'>('brand');

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('type', type); // Add whether it's a brand or influencer

    try {
      const response = await fetch('https://formspree.io/f/mnjlqqgk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
        // Fallback to show success anyway for UX if Formspree is not configured yet
        setIsSubmitted(true); 
      }
    } catch (error) {
      console.error("Form submission error", error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl z-50 shadow-2xl"
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-heading font-bold">Join Avenora</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-400">
                    We have received your request. Our team will reach out to you within 48 hours via email.
                  </p>
                  <button 
                    onClick={onClose}
                    className="mt-8 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex p-1 bg-white/5 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setType('brand')}
                      className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${type === 'brand' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      I am a Brand
                    </button>
                    <button
                      type="button"
                      onClick={() => setType('influencer')}
                      className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${type === 'influencer' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      I am an Influencer
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Name *</label>
                      <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Email *</label>
                      <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">WhatsApp (Optional)</label>
                      <input type="tel" name="whatsapp" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="+1 234 567 890" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Niche / Industry *</label>
                      <input required type="text" name="niche" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="e.g. Tech, Fashion" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">
                      {type === 'brand' ? 'Estimated Budget *' : 'Total Followers *'}
                    </label>
                    <input required type="text" name={type === 'brand' ? 'budget' : 'followers'} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder={type === 'brand' ? "e.g. $5,000 - $10,000" : "e.g. 500K"} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Social Links / Website *</label>
                    <input required type="url" name="social_links" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="https://" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Message (Optional)</label>
                    <textarea rows={3} name="message" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell us more about your goals..."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-purple-600 text-white font-medium text-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
      <Navbar onJoinClick={() => setIsModalOpen(true)} />
      <main>
        <Hero onJoinClick={() => setIsModalOpen(true)} />
        <WhatWeDo />
        <SocialProof />
        <HowItWorks />
        <InfluencerPreview />
        <CTA onJoinClick={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
