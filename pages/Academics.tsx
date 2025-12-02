import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Microscope, Palette, Shapes, ArrowRight } from 'lucide-react';

export const Academics: React.FC = () => {
  const levels = [
    {
      id: "creche",
      name: "Creche & Nursery",
      description: "A safe, nurturing home away from home where toddlers learn through play, song, and social interaction.",
      icon: <Shapes size={40} />,
      link: "/creche"
    },
    {
      id: "kindergarten",
      name: "Kindergarten",
      description: "Building the foundation for literacy and numeracy with a blend of Montessori and traditional methods.",
      icon: <Palette size={40} />,
      link: "/kindergarten"
    },
    {
      id: "primary",
      name: "Primary School",
      description: "Developing core skills in English, Math, Science, and ICT for Grades 1 through 6.",
      icon: <BookOpen size={40} />,
      link: "/primary"
    },
    {
      id: "jhs",
      name: "Junior High School",
      description: "Rigorous preparation for the BECE with specialized subject teaching in all core areas.",
      icon: <Microscope size={40} />,
      link: "/jhs"
    }
  ];

  return (
    <div className="pt-20">
       <section className="bg-academy-navy py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
             <span className="text-academy-gold font-bold uppercase tracking-widest text-sm">Curriculum</span>
             <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">Academic Excellence</h1>
             <p className="text-lg text-slate-300 leading-relaxed">
               From Creche to JHS, our curriculum is designed to challenge students to think critically, 
               communicate effectively, and approach problems with creativity and resilience.
             </p>
          </div>
        </div>
      </section>

      {/* Levels Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {levels.map((level) => (
              <div key={level.id} className="flex flex-col p-8 border border-slate-100 rounded-sm hover:shadow-xl transition-all duration-300 bg-slate-50 group">
                <div className="mb-6 text-academy-gold group-hover:scale-110 transition-transform">
                  {level.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-academy-navy mb-4">{level.name}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{level.description}</p>
                
                <NavLink 
                  to={level.link} 
                  className="inline-flex items-center text-academy-navy font-bold uppercase tracking-wider text-sm hover:text-academy-gold transition"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Academic Info */}
      <section className="py-24 bg-slate-100">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-academy-navy mb-6">Why Choose Smart Kids?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
               <div className="bg-white p-6 rounded-sm shadow-sm">
                  <h3 className="font-bold text-lg text-academy-navy mb-2">Qualified Teachers</h3>
                  <p className="text-slate-500 text-sm">Dedicated and certified educators for every level.</p>
               </div>
               <div className="bg-white p-6 rounded-sm shadow-sm">
                  <h3 className="font-bold text-lg text-academy-navy mb-2">Small Class Sizes</h3>
                  <p className="text-slate-500 text-sm">Ensuring personalized attention for every child.</p>
               </div>
               <div className="bg-white p-6 rounded-sm shadow-sm">
                  <h3 className="font-bold text-lg text-academy-navy mb-2">Holistic Growth</h3>
                  <p className="text-slate-500 text-sm">Focus on moral, social, and academic development.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};