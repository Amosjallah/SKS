import React from 'react';
import { Book, Globe, Cpu, PenTool } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Primary: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwpY-ShTkE-3YS3AuMOwwbq9nIrOkRQ2C4zMGVHTN3JowQTrsxtNkHpsZKi-D0KtoHuKA15K4Fd3qK1Tn8eTxDf5yh5PLeOTeYnxirAKQA7YG--9tw0A_4eTowzn4bPkcXURzEg=w1920-h1080-c"
            alt="Primary School Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="text-academy-gold font-bold uppercase tracking-widest text-sm mb-4 block">Basic Education</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Primary School</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Grades 1 to 6: Developing core competencies and critical thinking skills.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-academy-navy mb-6">Lower & Upper Primary</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Our Primary School curriculum builds upon the foundation laid in Kindergarten. 
                From Grade 1 to 3 (Lower Primary), the focus is on mastering literacy and numeracy. 
                From Grade 4 to 6 (Upper Primary), students are introduced to more specialized subjects 
                and are encouraged to apply their knowledge to solve problems.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We maintain small class sizes to ensure that teachers can identify the strengths and 
                weaknesses of each pupil, providing remedial support where necessary.
              </p>
            </div>
            <div className="bg-slate-50 p-8 border-l-4 border-academy-gold">
               <h3 className="font-bold text-academy-navy mb-4 text-lg">Key Subjects</h3>
               <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-slate-600">
                   <Book size={18} className="text-academy-navy" /> English Language
                 </li>
                 <li className="flex items-center gap-3 text-slate-600">
                   <Book size={18} className="text-academy-navy" /> Mathematics
                 </li>
                 <li className="flex items-center gap-3 text-slate-600">
                   <Globe size={18} className="text-academy-navy" /> Integrated Science
                 </li>
                 <li className="flex items-center gap-3 text-slate-600">
                   <Globe size={18} className="text-academy-navy" /> Our World Our People
                 </li>
                 <li className="flex items-center gap-3 text-slate-600">
                   <Cpu size={18} className="text-academy-navy" /> Computing (ICT)
                 </li>
                 <li className="flex items-center gap-3 text-slate-600">
                   <PenTool size={18} className="text-academy-navy" /> Creative Arts
                 </li>
                 <li className="flex items-center gap-3 text-slate-600">
                   <Globe size={18} className="text-academy-navy" /> French & Ghanaian Language
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular */}
      <section className="py-24 bg-slate-100">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-academy-navy mb-12 text-center">Beyond the Classroom</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="group relative overflow-hidden rounded-sm">
                  <img src="https://picsum.photos/id/160/600/400" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" alt="Coding" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                     <h3 className="text-white font-bold text-xl">ICT & Coding Club</h3>
                  </div>
               </div>
               <div className="group relative overflow-hidden rounded-sm">
                  <img src="https://picsum.photos/id/450/600/400" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" alt="Sports" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                     <h3 className="text-white font-bold text-xl">Sports Team</h3>
                  </div>
               </div>
               <div className="group relative overflow-hidden rounded-sm">
                  <img src="https://picsum.photos/id/452/600/400" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" alt="Music" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                     <h3 className="text-white font-bold text-xl">Cultural & Drama Troupe</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
           <NavLink to="/admissions" className="px-8 py-4 bg-academy-navy text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-slate-800 transition shadow-lg">
             Enroll in Primary School
           </NavLink>
        </div>
      </section>
    </div>
  );
};