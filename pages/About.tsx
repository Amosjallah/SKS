import React from 'react';
import { FACULTY } from '../data';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-academy-navy mb-4">About Smart Kids</h1>
          <div className="h-1 w-20 bg-academy-gold mx-auto"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-slate-50 p-10 border-l-4 border-academy-gold shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-academy-navy mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                "To provide a stimulating learning environment where every child is encouraged 
                to reach their full potential academically, socially, and morally. We aim to 
                raise confident, creative, and smart leaders for the future."
              </p>
            </div>
            <div className="bg-academy-navy p-10 border-r-4 border-academy-gold shadow-sm text-white">
              <h2 className="text-2xl font-serif font-bold text-white mb-6">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                "To be the preferred school of choice for holistic basic education, 
                known for academic excellence and the disciplined upbringing of children."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Head's Message */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3 shrink-0">
               <img 
                 src="https://picsum.photos/id/1062/400/500" 
                 alt="Headmistress" 
                 className="w-full shadow-lg rounded-sm"
               />
               <div className="mt-4 text-center">
                 <h3 className="font-serif font-bold text-xl text-academy-navy">Mrs. Eleanor Vance</h3>
                 <p className="text-academy-gold text-sm font-bold uppercase tracking-wider">Headmistress</p>
               </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-serif font-bold text-academy-navy mb-6">Message from the Headmistress</h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  Welcome to Smart Kids School. Since 2008, we have been dedicated to providing a strong foundation for children from Creche through to Junior High School.
                </p>
                <p className="mb-4">
                  We believe that the early years are crucial for development. That is why our curriculum is designed not just to teach, but to inspire curiosity and a love for learning. Our dedicated staff works tirelessly to ensure every child feels safe, valued, and motivated.
                </p>
                <p>
                  I invite you to visit our campus, see our facilities, and join our growing family. Together, we can shape the smart leaders of tomorrow.
                </p>
                <div className="mt-8">
                   <img src="https://picsum.photos/id/550/200/60" alt="Signature" className="opacity-60 h-16 object-contain -ml-4 grayscale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-academy-gold font-bold uppercase tracking-widest text-sm">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-academy-navy mt-2">Meet Our Educators</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FACULTY.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative overflow-hidden rounded-sm mb-6 inline-block w-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-[3/4] object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-academy-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <h3 className="font-serif font-bold text-lg text-academy-navy">{member.name}</h3>
                <p className="text-academy-gold text-xs font-bold uppercase tracking-wider mb-1">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};