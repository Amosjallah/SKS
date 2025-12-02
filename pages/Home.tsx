import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import { ANNOUNCEMENTS, STATISTICS } from '../data';

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Using the provided Google Photos links with high-res parameters (=w1920-h1080) for clarity
  const slides = [
    {
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c",
      title: "Nurturing Future Leaders Today",
      subtitle: "Smart Kids School provides a holistic education from Creche to JHS, focusing on academic excellence and moral values."
    },
    {
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyBrX1bkCUuhCpqLlluf5F_JFyT_2sPRxU4C9Fl7rLcHvpNlMjv_bA8Gip3jUU5iz2l9VzfrNFCBHnRp7dHsKmsG7-3R_YBaqBWGs3PWgL1K3Jp4W1QzoZaTPBasASCrIcdd_h3=w1920-h1080-c",
      title: "A Stimulating Learning Environment",
      subtitle: "Our facilities and dedicated staff ensure a safe and happy atmosphere where education thrives."
    },
    {
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwpY-ShTkE-3YS3AuMOwwbq9nIrOkRQ2C4zMGVHTN3JowQTrsxtNkHpsZKi-D0KtoHuKA15K4Fd3qK1Tn8eTxDf5yh5PLeOTeYnxirAKQA7YG--9tw0A_4eTowzn4bPkcXURzEg=w1920-h1080-c",
      title: "Building Confidence & Discipline",
      subtitle: "We aim to raise confident, creative, and smart leaders for the future through rigorous training and care."
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section Slider */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Clearer Overlay: Black gradient instead of heavy blue tint for better photo visibility */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-academy-navy/80 via-transparent to-transparent opacity-90" />
          </div>
        ))}

        {/* Content Layer */}
        <div className="relative z-20 container mx-auto px-6 text-center mt-10">
          <div className="animate-fade-in-up">
            <p className="text-academy-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md">
              Est. 2008
            </p>
            
            {/* Dynamic Title based on slide */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg transition-all duration-500">
              {slides[currentSlide].title}
            </h1>
            
            {/* Dynamic Subtitle */}
            <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md min-h-[3.5rem] transition-all duration-500">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink
                to="/admissions"
                className="px-8 py-4 bg-academy-gold text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-amber-700 transition transform hover:-translate-y-1 shadow-lg border border-transparent"
              >
                Enroll Your Child
              </NavLink>
              <NavLink
                to="/about"
                className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-academy-navy transition transform hover:-translate-y-1 backdrop-blur-sm"
              >
                Discover More
              </NavLink>
            </div>
          </div>
        </div>

        {/* Slider Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={48} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight size={48} />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-academy-gold w-8' 
                  : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {STATISTICS.map((stat, idx) => (
              <div key={idx} className="text-center px-4 pt-8 md:pt-0">
                <div className="text-4xl md:text-5xl font-serif font-bold text-academy-navy mb-2">
                  {stat.value}
                </div>
                <div className="text-academy-gold font-bold uppercase tracking-wider text-xs mb-3">
                  {stat.label}
                </div>
                <p className="text-slate-500 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome / Mission Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-academy-gold z-0" />
              <img
                src="https://picsum.photos/id/20/800/600"
                alt="Students studying"
                className="relative z-10 w-full shadow-xl rounded-sm"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-12 bg-academy-gold"></span>
                <span className="text-academy-gold font-bold uppercase tracking-widest text-sm">Welcome</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-academy-navy mb-6">
                Where Every Child is Smart
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Since 2008, Smart Kids School has been a home for nurturing young minds. 
                From our caring Creche to our rigorous Junior High School program, 
                we believe every child has unique talents waiting to be discovered.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our facilities and dedicated staff ensure a safe, stimulating, and happy 
                environment for learning. We bridge the gap between home and school, 
                creating a family atmosphere where education thrives.
              </p>
              <NavLink to="/about" className="inline-flex items-center text-academy-navy font-bold uppercase tracking-wider text-sm hover:text-academy-gold transition">
                Read our Mission <ArrowRight size={16} className="ml-2" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-academy-gold"></span>
                <span className="text-academy-gold font-bold uppercase tracking-widest text-xs">Latest Updates</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-academy-navy">School News</h2>
            </div>
            <NavLink to="/news" className="hidden md:flex items-center text-slate-500 hover:text-academy-gold transition text-sm font-bold uppercase tracking-wider">
              View All News <ChevronRight size={16} className="ml-1" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ANNOUNCEMENTS.map((news) => (
              <div key={news.id} className="group bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-academy-gold text-xs font-bold uppercase tracking-wider border border-academy-gold/20 px-2 py-1 rounded-sm">
                      {news.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-academy-navy mb-3 group-hover:text-academy-gold transition-colors">
                    <NavLink to="/news">{news.title}</NavLink>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {news.summary}
                  </p>
                  <NavLink to="/news" className="text-academy-navy text-sm font-bold uppercase tracking-wider hover:underline decoration-academy-gold decoration-2 underline-offset-4">
                    Read More
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <NavLink to="/news" className="inline-block px-6 py-3 border border-slate-300 text-slate-600 font-bold uppercase tracking-wider text-sm rounded-sm">
              View All News
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-academy-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-academy-gold/10 -skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Star size={48} className="text-academy-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Join the Smart Kids Family
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Give your child the best foundation for a successful future.
            Admissions for the new academic year are now open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <NavLink
                to="/admissions"
                className="px-8 py-4 bg-academy-gold text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-amber-700 transition shadow-lg"
              >
                Apply Today
              </NavLink>
              <NavLink
                to="/contact"
                className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white/10 transition"
              >
                Contact Us
              </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
