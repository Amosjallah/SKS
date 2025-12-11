import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Microscope, Palette, Shapes, ArrowRight, Brain, Calculator, Languages, Laptop, CalendarCheck, FileText } from 'lucide-react';

export const Academics: React.FC = () => {
  const levels = [
    {
      id: "creche",
      name: "Creche & Nursery",
      description: "A safe, nurturing home away from home where toddlers learn through play, song, and social interaction.",
      icon: <Shapes size={32} />,
      link: "/creche"
    },
    {
      id: "kindergarten",
      name: "Kindergarten",
      description: "Building the foundation for literacy and numeracy with a blend of Montessori and traditional methods.",
      icon: <Palette size={32} />,
      link: "/kindergarten"
    },
    {
      id: "primary",
      name: "Primary School",
      description: "Developing core skills in English, Math, Science, and ICT for Grades 1 through 6.",
      icon: <BookOpen size={32} />,
      link: "/primary"
    },
    {
      id: "jhs",
      name: "Junior High School",
      description: "Rigorous preparation for the BECE with specialized subject teaching in all core areas.",
      icon: <Microscope size={32} />,
      link: "/jhs"
    }
  ];

  return (
    <div className="pt-20 font-sans">
       {/* Hero Section */}
       <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c"
            alt="Academics at Smart Kids School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
             <span className="text-academy-gold font-bold uppercase tracking-widest text-sm mb-2 block">Curriculum</span>
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Academic Excellence</h1>
             <p className="text-xl text-slate-200 leading-relaxed">
               From Creche to JHS, our curriculum is designed to challenge students to think critically, 
               communicate effectively, and approach problems with creativity and resilience.
             </p>
          </div>
        </div>
      </section>

      {/* Levels Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {levels.map((level) => (
              <div key={level.id} className="flex flex-col p-8 md:p-10 border border-slate-100 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-slate-50 group hover:-translate-y-1">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-academy-gold group-hover:bg-academy-gold group-hover:text-white transition-colors duration-300">
                  {level.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-academy-navy mb-4">{level.name}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow text-lg">{level.description}</p>
                
                <NavLink 
                  to={level.link} 
                  className="inline-flex items-center text-academy-navy font-bold uppercase tracking-wider text-sm hover:text-academy-gold transition group-hover:translate-x-2 duration-300"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrichment Programs */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-academy-gold font-bold uppercase tracking-widest text-sm">Beyond the Books</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-academy-navy mt-2">Enrichment Programs</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <div className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Laptop size={24} />
              </div>
              <h3 className="font-bold text-lg text-academy-navy mb-2">ICT & Coding</h3>
              <p className="text-slate-500 text-sm">Practical computing skills and basic programming for the digital age.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <div className="mx-auto w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
                <Languages size={24} />
              </div>
              <h3 className="font-bold text-lg text-academy-navy mb-2">French Language</h3>
              <p className="text-slate-500 text-sm">Immersive language lessons to build fluency and cultural awareness.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <div className="mx-auto w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Calculator size={24} />
              </div>
              <h3 className="font-bold text-lg text-academy-navy mb-2">Mental Math</h3>
              <p className="text-slate-500 text-sm">UCMAS and speed mathematics programs to boost cognitive agility.</p>
            </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <div className="mx-auto w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Brain size={24} />
              </div>
              <h3 className="font-bold text-lg text-academy-navy mb-2">Critical Thinking</h3>
              <p className="text-slate-500 text-sm">Logic puzzles and debate clubs to sharpen reasoning skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Support */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-academy-navy mb-6">Student Support</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We believe that every child learns differently. Our academic support system ensures that no student is left behind.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-academy-gold/20 flex items-center justify-center text-academy-gold font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-academy-navy text-lg">Remedial Classes</h3>
                    <p className="text-slate-500">Targeted after-school sessions for students needing extra help in core subjects.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-academy-gold/20 flex items-center justify-center text-academy-gold font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-academy-navy text-lg">Counseling Unit</h3>
                    <p className="text-slate-500">Professional guidance for academic planning and emotional well-being.</p>
                  </div>
                </div>
                 <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-academy-gold/20 flex items-center justify-center text-academy-gold font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-academy-navy text-lg">Parent-Teacher Reviews</h3>
                    <p className="text-slate-500">Regular open days to discuss individual student progress and strategies.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-slate-50 rounded-2xl p-8 border border-slate-100">
               <h3 className="text-2xl font-serif font-bold text-academy-navy mb-6">Assessment Structure</h3>
               <div className="space-y-4">
                 <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
                    <CalendarCheck className="text-academy-navy shrink-0" />
                    <div>
                      <h4 className="font-bold text-academy-navy">Continuous Assessment (40%)</h4>
                      <p className="text-xs text-slate-500">Class exercises, homework, and mid-term projects.</p>
                    </div>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
                    <FileText className="text-academy-navy shrink-0" />
                    <div>
                      <h4 className="font-bold text-academy-navy">End of Term Exams (60%)</h4>
                      <p className="text-xs text-slate-500">Comprehensive examination covering the term's syllabus.</p>
                    </div>
                 </div>
               </div>

               <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-academy-navy mb-2">Grading System</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between p-2 bg-white rounded"><span>80% - 100%</span> <span className="font-bold text-green-600">A (Excellent)</span></div>
                    <div className="flex justify-between p-2 bg-white rounded"><span>70% - 79%</span> <span className="font-bold text-blue-600">B (Very Good)</span></div>
                    <div className="flex justify-between p-2 bg-white rounded"><span>60% - 69%</span> <span className="font-bold text-yellow-600">C (Good)</span></div>
                    <div className="flex justify-between p-2 bg-white rounded"><span>Below 60%</span> <span className="font-bold text-red-600">Needs Improvement</span></div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Smart Kids - Refined */}
      <section className="py-24 bg-academy-navy text-white">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold mb-12">The Smart Kids Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                  <h3 className="font-bold text-xl text-academy-gold mb-3">Qualified Teachers</h3>
                  <p className="text-slate-200 text-sm leading-relaxed">Dedicated and trained educators who are passionate about child development and academic success.</p>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                  <h3 className="font-bold text-xl text-academy-gold mb-3">Small Class Sizes</h3>
                  <p className="text-slate-200 text-sm leading-relaxed">Maintaining a low student-teacher ratio to ensure personalized attention and better engagement.</p>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                  <h3 className="font-bold text-xl text-academy-gold mb-3">Holistic Growth</h3>
                  <p className="text-slate-200 text-sm leading-relaxed">A balanced approach focusing on moral values, social skills, and academic excellence.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};