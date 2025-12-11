import React from 'react';
import { ANNOUNCEMENTS } from '../data';
import { Calendar } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c"
            alt="School News & Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">News & Events</h1>
          <p className="text-slate-200 max-w-2xl mx-auto">Stay up to date with the latest achievements, events, and announcements from our vibrant community.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {ANNOUNCEMENTS.map((news) => (
              <div key={news.id} className="flex flex-col md:flex-row gap-8 border-b border-slate-100 pb-12 last:border-0">
                <div className="md:w-1/4 shrink-0">
                   <div className="bg-slate-50 p-6 text-center border border-slate-200 rounded-sm">
                      <span className="block text-4xl font-serif font-bold text-academy-gold mb-1">{news.date.split(' ')[1].replace(',', '')}</span>
                      <span className="block text-sm font-bold uppercase tracking-wider text-slate-500">{news.date.split(' ')[0]}</span>
                      <span className="block text-xs text-slate-400 mt-2">{news.date.split(' ')[2]}</span>
                   </div>
                </div>
                <div className="md:w-3/4">
                   <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-academy-navy/5 text-academy-navy text-xs font-bold uppercase tracking-wider rounded-sm">
                        {news.category}
                      </span>
                   </div>
                   <h2 className="text-2xl font-serif font-bold text-academy-navy mb-3 hover:text-academy-gold transition cursor-pointer">
                     {news.title}
                   </h2>
                   <p className="text-slate-600 leading-relaxed mb-4">
                     {news.summary}
                   </p>
                   <a href="#" className="text-academy-gold font-bold uppercase text-xs tracking-wider hover:text-amber-700 transition">
                     Read Full Story &rarr;
                   </a>
                </div>
              </div>
            ))}
            
            {/* Mock extra items to fill page */}
             <div className="flex flex-col md:flex-row gap-8 border-b border-slate-100 pb-12 last:border-0">
                <div className="md:w-1/4 shrink-0">
                   <div className="bg-slate-50 p-6 text-center border border-slate-200 rounded-sm">
                      <span className="block text-4xl font-serif font-bold text-academy-gold mb-1">10</span>
                      <span className="block text-sm font-bold uppercase tracking-wider text-slate-500">SEP</span>
                      <span className="block text-xs text-slate-400 mt-2">2023</span>
                   </div>
                </div>
                <div className="md:w-3/4">
                   <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-academy-navy/5 text-academy-navy text-xs font-bold uppercase tracking-wider rounded-sm">
                        Sports
                      </span>
                   </div>
                   <h2 className="text-2xl font-serif font-bold text-academy-navy mb-3 hover:text-academy-gold transition cursor-pointer">
                     Varsity Football Season Kickoff
                   </h2>
                   <p className="text-slate-600 leading-relaxed mb-4">
                     The Lumina Lions faced off against their regional rivals in an electrifying season opener, demonstrating teamwork and resilience on the field.
                   </p>
                   <a href="#" className="text-academy-gold font-bold uppercase text-xs tracking-wider hover:text-amber-700 transition">
                     Read Full Story &rarr;
                   </a>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};