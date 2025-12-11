import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for inquiries, admissions, or to schedule a school tour.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info Side */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-academy-navy mb-6">Get in Touch</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Our administrative office is open Monday to Friday. Feel free to drop by or contact us via phone or email.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-academy-navy/5 p-3 rounded-sm">
                  <MapPin className="text-academy-navy" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-academy-navy mb-1">Our Location</h3>
                  <p className="text-slate-600">
                    Smart Kids School<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-academy-navy/5 p-3 rounded-sm">
                  <Phone className="text-academy-navy" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-academy-navy mb-1">Phone Number</h3>
                  <p className="text-slate-600">
                    <a href="tel:+233208192118" className="hover:text-academy-gold transition">
                      +233 20 819 2118
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-academy-navy/5 p-3 rounded-sm">
                  <Mail className="text-academy-navy" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-academy-navy mb-1">Email Address</h3>
                  <p className="text-slate-600">
                    <a href="mailto:info@smartkids.edu.gh" className="hover:text-academy-gold transition">
                      info@smartkids.edu.gh
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-academy-navy/5 p-3 rounded-sm">
                  <Clock className="text-academy-navy" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-academy-navy mb-1">Office Hours</h3>
                  <p className="text-slate-600 text-sm">
                    Mon - Fri: 7:30 AM - 4:30 PM<br />
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="lg:w-2/3 bg-slate-50 p-8 md:p-12 border border-slate-100 rounded-sm">
              <h2 className="text-2xl font-serif font-bold text-academy-navy mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase text-slate-500 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full border border-slate-300 p-4 rounded-sm focus:border-academy-navy focus:outline-none bg-white transition-colors"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase text-slate-500 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full border border-slate-300 p-4 rounded-sm focus:border-academy-navy focus:outline-none bg-white transition-colors"
                      placeholder="e.g. john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase text-slate-500 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full border border-slate-300 p-4 rounded-sm focus:border-academy-navy focus:outline-none bg-white transition-colors"
                      placeholder="e.g. +233 20 819 2118"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase text-slate-500 mb-2">Subject</label>
                    <select 
                      id="subject"
                      className="w-full border border-slate-300 p-4 rounded-sm focus:border-academy-navy focus:outline-none bg-white transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Admissions</option>
                      <option>Fees & Tuition</option>
                      <option>Report an Issue</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase text-slate-500 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full border border-slate-300 p-4 rounded-sm focus:border-academy-navy focus:outline-none bg-white transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-academy-gold text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-amber-700 transition shadow-md w-full md:w-auto"
                >
                  <Send size={16} className="mr-2" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
           {/* In a real app, embed Google Maps iframe here */}
           <div className="text-center">
             <MapPin size={48} className="mx-auto mb-4 opacity-50" />
             <p className="text-lg font-bold">Map Location</p>
             <p className="text-sm">Smart Kids School, Accra, Ghana</p>
           </div>
        </div>
        {/* Example Overlay of Location Card */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-xl rounded-sm max-w-sm w-full text-center">
             <h3 className="font-serif font-bold text-academy-navy text-xl mb-2">Visit Us</h3>
             <p className="text-slate-600 mb-4">We conduct school tours every Friday morning. Schedule a visit today!</p>
             <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-academy-gold font-bold text-sm uppercase tracking-wider hover:underline">
               Get Directions
             </a>
        </div>
      </section>
    </div>
  );
};