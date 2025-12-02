import React from 'react';
import { Microscope, Award, Brain, Target } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const JHS: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c"
            alt="Junior High Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="text-academy-gold font-bold uppercase tracking-widest text-sm mb-4 block">Junior High School</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Academic Excellence</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Preparing students for the Basic Education Certificate Examination (BECE) and future success.
          </p>
        </div>
      </section>

      {/* Academic Rigor */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="md:w-1/2 order-2 md:order-1">
                <img src="https://picsum.photos/id/60/600/400" alt="Science Lab" className="rounded-sm shadow-xl" />
             </div>
             <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="text-3xl font-serif font-bold text-academy-navy mb-6">Rigorous Preparation</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  JHS 1 to JHS 3 represents the final stage of basic education. At Smart Kids School, we intensify 
                  academic work to ensure students are fully prepared for their final exams. 
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                   Our experienced subject teachers provide in-depth tuition in all 9 core subjects. 
                   We also organize regular mock exams, extra classes, and counseling sessions to guide students 
                   in choosing their Senior High School programmes.
                </p>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2 text-academy-navy font-bold">
                      <Target className="text-academy-gold" /> 100% Pass Rate
                   </div>
                   <div className="flex items-center gap-2 text-academy-navy font-bold">
                      <Award className="text-academy-gold" /> Distinction
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-20 bg-slate-50">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-academy-navy mb-12 text-center">Core Subjects</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 "Mathematics", "Integrated Science", "English Language", "Social Studies", 
                 "RME", "ICT", "BDT (Pre-Tech/Home Econs)", "French"
               ].map((subject, idx) => (
                  <div key={idx} className="bg-white p-6 text-center shadow-sm rounded-sm border border-slate-100 hover:border-academy-gold transition">
                     <span className="font-bold text-academy-navy">{subject}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-academy-navy text-white">
        <div className="container mx-auto px-6 text-center">
           <Brain size={48} className="mx-auto text-academy-gold mb-6" />
           <h2 className="text-3xl font-serif font-bold mb-6">Leadership & Discipline</h2>
           <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
             We groom our JHS students to be prefects and role models for the younger ones. 
             Discipline, punctuality, and hard work are the hallmarks of a Smart Kids graduate.
           </p>
           <NavLink to="/admissions" className="inline-block px-8 py-4 border border-white text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-academy-navy transition">
             Join JHS Department
           </NavLink>
        </div>
      </section>
    </div>
  );
};