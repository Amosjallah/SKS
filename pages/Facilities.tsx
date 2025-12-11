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
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c"
            alt="School Facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Facilities</h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
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