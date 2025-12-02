import React from 'react';
import { Palette, BookOpen, Users, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Kindergarten: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyBrX1bkCUuhCpqLlluf5F_JFyT_2sPRxU4C9Fl7rLcHvpNlMjv_bA8Gip3jUU5iz2l9VzfrNFCBHnRp7dHsKmsG7-3R_YBaqBWGs3PWgL1K3Jp4W1QzoZaTPBasASCrIcdd_h3=w1920-h1080-c"
            alt="Kindergarten Classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="text-academy-gold font-bold uppercase tracking-widest text-sm mb-4 block">Preschool</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Kindergarten</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Building the foundation for literacy, numeracy, and social confidence (KG 1 & KG 2).
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-academy-navy mb-6">The Montessori Approach</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our Kindergarten department blends the National Curriculum with Montessori principles. 
              We believe in "learning by doing," where children use practical materials to understand 
              abstract concepts in math and language. This prepares them for a smooth transition to Primary School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-sm">
              <h3 className="text-2xl font-serif font-bold text-academy-navy mb-4 flex items-center gap-3">
                <BookOpen className="text-academy-gold" /> Literacy
              </h3>
              <p className="text-slate-600 mb-4">
                We focus on phonics, sight words, and early reading skills. By the end of KG 2, 
                most of our smart kids are reading simple sentences confidently.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><Star size={14} className="text-academy-gold" /> Jolly Phonics</li>
                <li className="flex items-center gap-2"><Star size={14} className="text-academy-gold" /> Guided Reading</li>
                <li className="flex items-center gap-2"><Star size={14} className="text-academy-gold" /> Creative Writing</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-sm">
              <h3 className="text-2xl font-serif font-bold text-academy-navy mb-4 flex items-center gap-3">
                <Palette className="text-academy-gold" /> Numeracy
              </h3>
              <p className="text-slate-600 mb-4">
                Mathematics is introduced through hands-on activities. Children learn counting, 
                simple addition, shapes, and patterns using tangible objects.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><Star size={14} className="text-academy-gold" /> Number Recognition</li>
                <li className="flex items-center gap-2"><Star size={14} className="text-academy-gold" /> Basic Arithmetic</li>
                <li className="flex items-center gap-2"><Star size={14} className="text-academy-gold" /> Logic & Patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature */}
      <section className="py-24 bg-academy-navy text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <img src="https://picsum.photos/id/158/800/600" alt="Group Activity" className="rounded-sm shadow-2xl border-4 border-white/10" />
          </div>
          <div className="md:w-1/2">
             <div className="flex items-center gap-2 mb-4">
                <Users className="text-academy-gold" />
                <span className="font-bold uppercase tracking-wider text-sm text-academy-gold">Social Development</span>
             </div>
             <h2 className="text-3xl font-serif font-bold mb-6">Learning Together</h2>
             <p className="text-slate-300 leading-relaxed mb-6">
               Kindergarten is also about learning to be a friend. We emphasize sharing, 
               taking turns, and working in teams. Through circle time and group projects, 
               children develop the confidence to express themselves and respect others.
             </p>
             <NavLink to="/admissions" className="text-white border-b-2 border-academy-gold pb-1 font-bold uppercase text-sm hover:text-academy-gold transition">
               Get Admission Details
             </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};