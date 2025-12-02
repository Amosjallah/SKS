import React from 'react';
import { Heart, Music, Sun, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Creche: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c"
            alt="Creche and Nursery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="text-academy-gold font-bold uppercase tracking-widest text-sm mb-4 block">Early Years</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Creche & Nursery</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            A loving home away from home where your toddler's journey of discovery begins.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-academy-navy mb-6">Nurturing Young Minds</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Smart Kids School, we understand that the early years are critical for a child's development. 
                Our Creche and Nursery department provides a safe, hygienic, and stimulating environment designed 
                specifically for toddlers aged 6 months to 3 years.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We focus on sensory play, social interaction, and emotional development. Our caregivers are trained 
                to provide personalized attention, ensuring that every child feels loved and secure.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Heart className="text-academy-gold shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-academy-navy">Emotional Care</h4>
                    <p className="text-sm text-slate-500">Loving and attentive staff.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="text-academy-gold shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-academy-navy">Safe Play</h4>
                    <p className="text-sm text-slate-500">Secure indoor & outdoor areas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Music className="text-academy-gold shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-academy-navy">Music & Movement</h4>
                    <p className="text-sm text-slate-500">Songs, dance, and rhymes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-academy-gold shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-academy-navy">Flexible Hours</h4>
                    <p className="text-sm text-slate-500">7:00 AM to 5:00 PM support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/id/102/400/500" alt="Toddler playing" className="rounded-sm shadow-lg w-full h-full object-cover" />
                <img src="https://picsum.photos/id/22/400/500" alt="Story time" className="rounded-sm shadow-lg w-full h-full object-cover mt-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-academy-navy">Daily Activities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-academy-gold shadow-sm hover:shadow-md transition">
              <h3 className="font-serif font-bold text-xl text-academy-navy mb-4">Sensory Play</h3>
              <p className="text-slate-600">
                Activities involving sand, water, and textured materials to help develop fine motor skills and cognitive recognition.
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-academy-navy shadow-sm hover:shadow-md transition">
              <h3 className="font-serif font-bold text-xl text-academy-navy mb-4">Storytelling</h3>
              <p className="text-slate-600">
                Daily reading sessions to spark imagination and introduce basic language concepts through picture books.
              </p>
            </div>
            <div className="bg-white p-8 border-t-4 border-academy-gold shadow-sm hover:shadow-md transition">
              <h3 className="font-serif font-bold text-xl text-academy-navy mb-4">Creative Arts</h3>
              <p className="text-slate-600">
                Simple painting, coloring, and crafting to encourage self-expression and hand-eye coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-academy-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-6">Enroll Your Little One</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Spaces in our Creche and Nursery are limited to ensure a low caregiver-to-child ratio.
          </p>
          <NavLink to="/admissions" className="inline-block px-8 py-4 bg-academy-gold text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-amber-700 transition">
            Apply for Admission
          </NavLink>
        </div>
      </section>
    </div>
  );
};