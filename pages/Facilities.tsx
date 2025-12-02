import React from 'react';
import { Monitor, Coffee } from 'lucide-react';

export const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: <Monitor size={40} />,
      title: "ICT Laboratory",
      description: "A fully equipped computer lab with internet access to ensure every student is digitally literate."
    },
    {
      icon: <Coffee size={40} />,
      title: "Canteen",
      description: "Hygienic canteen serving nutritious and healthy meals for students and staff."
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-academy-navy mb-4">Our Facilities</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide a conducive environment with modern facilities to support teaching and learning.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white min-h-[50vh]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facilities.map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-100 rounded-sm hover:shadow-xl transition-all duration-300 bg-slate-50 group">
                <div className="mb-6 text-academy-gold group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-academy-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};