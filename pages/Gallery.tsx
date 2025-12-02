import React from 'react';
import { ImageOff } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-academy-navy mb-4">Photo Gallery</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A glimpse into life at Smart Kids School.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white min-h-[400px] flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-sm p-12 max-w-2xl mx-auto">
            <ImageOff size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-serif font-bold text-academy-navy mb-2">Gallery Update in Progress</h3>
            <p className="text-slate-500">
              We are currently curating new photos of our campus and activities. Please check back soon to see our smart kids in action!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};