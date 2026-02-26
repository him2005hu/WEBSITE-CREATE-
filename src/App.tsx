/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Clock, MessageCircle, ExternalLink, PenTool, Book, Palette, Briefcase, GraduationCap, Printer, Gift, ShoppingBag, Search, X } from "lucide-react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const phoneNumber = "7503434156";
  const whatsappNumber = "7503434156";
  const address = "Prem Vihar, Khora Colony";
  const storeName = "श्री राम स्टेशनरी";
  const tagline = "Your One-Stop Stationery Shop";

  const products = [
    { icon: <Book className="w-8 h-8" />, name: "Notebooks", desc: "All sizes available" },
    { icon: <PenTool className="w-8 h-8" />, name: "Pens & Pencils", desc: "Premium quality" },
    { icon: <Palette className="w-8 h-8" />, name: "Art Supplies", desc: "Colors & brushes" },
    { icon: <ShoppingBag className="w-8 h-8" />, name: "School Bags", desc: "Durable & stylish" },
    { icon: <GraduationCap className="w-8 h-8" />, name: "Geometry Sets", desc: "Precision tools" },
    { icon: <Briefcase className="w-8 h-8" />, name: "Office Supplies", desc: "Files & folders" },
    { icon: <Printer className="w-8 h-8" />, name: "Print Services", desc: "Xerox & lamination" },
    { icon: <Gift className="w-8 h-8" />, name: "Gift Items", desc: "Special occasions" },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-amber-200" style={{ background: "linear-gradient(135deg, #fff5e6 0%, #ffe4c4 50%, #ffd9b3 100%)" }}>
      {/* Header */}
      <header className="py-6 px-4 sticky top-0 z-50 shadow-md" style={{ backgroundColor: "#8B4513" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-inner" style={{ backgroundColor: "#FFD700" }}>
              ✏️
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#FFD700", fontFamily: "'Playfair Display', serif" }}>
                {storeName}
              </h1>
              <p className="text-sm font-medium" style={{ color: "#ffe4c4" }}>{tagline}</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto"
          >
            {/* Search Bar */}
            <div className="relative w-full md:w-64 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-200/50 group-focus-within:text-amber-400 transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:bg-white/20 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-200/50 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center gap-2 px-6 py-2 rounded-full transition-all hover:scale-105 shadow-lg active:scale-95 w-full md:w-auto justify-center" 
              style={{ backgroundColor: "#FFD700", color: "#8B4513" }}
            >
              <Phone size={18} />
              <span className="font-bold">{phoneNumber}</span>
            </a>
          </motion.div>
        </div>
      </header>

      {/* Scrolling Promo Banner */}
      <div className="overflow-hidden py-3 relative z-10" style={{ background: "linear-gradient(90deg, #FF1493 0%, #FF69B4 50%, #FFD700 100%)" }}>
        <motion.div 
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-xl md:text-2xl font-bold text-white drop-shadow-md"
        >
          🎉 Use Code: <span className="underline decoration-white/50">RAJA12558</span> for 10% EXTRA DISCOUNT! 🎉 &nbsp;&nbsp;&nbsp;&nbsp; 
          🎉 Use Code: <span className="underline decoration-white/50">RAJA12558</span> for 10% EXTRA DISCOUNT! 🎉
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8 inline-block"
          >
            <span className="text-8xl drop-shadow-xl">📚</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6" 
            style={{ color: "#8B4513", fontFamily: "'Playfair Display', serif" }}
          >
            Welcome to Shri Ram Stationary
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed" 
            style={{ color: "#654321" }}
          >
            Quality stationery products for students, offices, and creative minds. 
            We bring you the finest tools to fuel your imagination and productivity!
          </motion.p>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-10 shadow-2xl relative overflow-hidden group" 
              style={{ background: "linear-gradient(135deg, #FFD700 0%, #FFC700 100%)" }}
            >
              <div className="absolute -right-10 -top-10 text-9xl opacity-10 group-hover:rotate-12 transition-transform duration-500">🎉</div>
              <div className="flex items-start gap-6 relative z-10">
                <span className="text-5xl">🎁</span>
                <div>
                  <h4 className="text-2xl font-bold mb-3" style={{ color: "#8B4513", fontFamily: "'Playfair Display', serif" }}>In-Shop Special Offer!</h4>
                  <p className="text-lg mb-4 opacity-90" style={{ color: "#654321" }}>Visit our store and get</p>
                  <p className="text-5xl font-black mb-4" style={{ color: "#8B4513" }}>10% OFF</p>
                  <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#654321" }}>on your entire purchase!</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl p-10 shadow-2xl relative overflow-hidden group" 
              style={{ background: "linear-gradient(135deg, #87CEEB 0%, #6495ED 100%)" }}
            >
              <div className="absolute -right-10 -top-10 text-9xl opacity-10 group-hover:-rotate-12 transition-transform duration-500">🚚</div>
              <div className="flex items-start gap-6 relative z-10 text-white">
                <span className="text-5xl">🚀</span>
                <div>
                  <h4 className="text-2xl font-bold mb-3" style={{ color: "#ffffff", fontFamily: "'Playfair Display', serif" }}>Home Delivery</h4>
                  <div className="space-y-2 mb-6">
                    <p className="flex items-center gap-2">
                      <span className="font-bold">Minimum Order:</span> 
                      <span className="bg-white/20 px-2 py-0.5 rounded">₹299</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-bold">Delivery Area:</span> 
                      <span className="bg-white/20 px-2 py-0.5 rounded">Within 2 km</span>
                    </p>
                  </div>
                  <p className="text-xs font-bold bg-red-500/80 inline-block px-3 py-1 rounded-full uppercase tracking-tighter">
                    ⚠️ In-shop discount not applicable on delivery
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Holi Celebration Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF69B4 0%, #FFD700 25%, #90EE90 50%, #87CEEB 75%, #DDA0DD 100%)" }}>
        {/* Animated Background Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`balloon-${i}`}
            animate={{ 
              y: [500, -200],
              x: [0, i % 2 === 0 ? 30 : -30],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              delay: i * 1.2,
              ease: "easeOut"
            }}
            className="absolute w-10 h-12 rounded-full shadow-lg"
            style={{ 
              left: `${15 + i * 15}%`,
              background: `radial-gradient(circle at 30% 30%, #fff, ${['#FF1493', '#FFD700', '#90EE90', '#87CEEB', '#DDA0DD'][i % 5]})`
            }}
          />
        ))}

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-5xl md:text-7xl font-black mb-4 text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Happy Holi! 🎨
            </motion.h2>
            <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">होली की हार्दिक शुभकामनाएं</p>
            <p className="text-lg mt-2 text-white/90 font-medium italic">Festival of Colors & Joy</p>
          </div>

          <div className="flex justify-between items-end px-4 md:px-20">
            <motion.div 
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-7xl md:text-9xl filter drop-shadow-lg"
            >
              👧
            </motion.div>
            
            <div className="text-center flex-1">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-8"
              >
                🎉
              </motion.div>
              <div className="flex justify-center gap-6">
                {['🎨', '🎊', '🎈'].map((emoji, idx) => (
                  <motion.span 
                    key={idx}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ delay: idx * 0.2, duration: 1.5, repeat: Infinity }}
                    className="text-5xl md:text-6xl"
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="text-7xl md:text-9xl filter drop-shadow-lg"
            >
              👦
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "#8B4513", fontFamily: "'Playfair Display', serif" }}>
              Our Premium Collection
            </h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {products
                .filter(p => 
                  p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  p.desc.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((product, index) => (
                  <motion.div 
                    key={product.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all border border-amber-100 group"
                  >
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                      {product.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2" style={{ color: "#8B4513" }}>{product.name}</h4>
                    <p className="text-sm font-medium" style={{ color: "#654321" }}>{product.desc}</p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {products.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            p.desc.toLowerCase().includes(searchQuery.toLowerCase())
          ).length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl font-medium text-amber-800">No products found matching "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 text-amber-600 font-bold hover:underline"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden" 
            style={{ backgroundColor: "#8B4513" }}
          >
            {/* Decorative background circle */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-center mb-12" style={{ color: "#FFD700", fontFamily: "'Playfair Display', serif" }}>
              Visit Us Today!
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-amber-900 transition-all">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: "#FFD700" }}>Address</p>
                    <p className="text-xl font-medium" style={{ color: "#ffe4c4" }}>{address}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-amber-900 transition-all">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: "#FFD700" }}>Phone</p>
                    <a href={`tel:${phoneNumber}`} className="text-xl font-medium hover:underline decoration-amber-400" style={{ color: "#ffe4c4" }}>
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-amber-900 transition-all">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: "#FFD700" }}>Timing</p>
                    <p className="text-xl font-medium" style={{ color: "#ffe4c4" }}>9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <motion.a 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`tel:${phoneNumber}`} 
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold text-xl shadow-xl transition-all" 
                  style={{ backgroundColor: "#FFD700", color: "#8B4513" }}
                >
                  <Phone size={24} /> Call Now
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold text-xl shadow-xl transition-all text-white" 
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={24} /> WhatsApp
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold text-xl shadow-xl transition-all text-white" 
                  style={{ backgroundColor: "#E63946" }}
                >
                  <ExternalLink size={24} /> Open Maps
                </motion.a>
                
                <p className="text-sm text-center font-medium italic mt-2" style={{ color: "#ffe4c4" }}>
                  "We deliver quality at affordable prices!"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-amber-200" style={{ backgroundColor: "#654321" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#FFD700", fontFamily: "'Playfair Display', serif" }}>
            {storeName}
          </h2>
          <p className="mb-6" style={{ color: "#ffe4c4" }}>© 2024 श्री राम स्टेशनरी | Shri Ram Stationary</p>
          <div className="flex justify-center gap-8 text-sm font-medium" style={{ color: "#d4a574" }}>
            <span>Quality Products</span>
            <span className="w-1 h-1 bg-amber-900 rounded-full my-auto"></span>
            <span>Best Prices</span>
            <span className="w-1 h-1 bg-amber-900 rounded-full my-auto"></span>
            <span>Trusted Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
