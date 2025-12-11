import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // High quality images provided
  const images = [
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c",
      category: "Academic",
      caption: "Engaged Learning in Classrooms"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyBrX1bkCUuhCpqLlluf5F_JFyT_2sPRxU4C9Fl7rLcHvpNlMjv_bA8Gip3jUU5iz2l9VzfrNFCBHnRp7dHsKmsG7-3R_YBaqBWGs3PWgL1K3Jp4W1QzoZaTPBasASCrIcdd_h3=w1920-h1080-c",
      category: "Events",
      caption: "School Assembly & Gatherings"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwpY-ShTkE-3YS3AuMOwwbq9nIrOkRQ2C4zMGVHTN3JowQTrsxtNkHpsZKi-D0KtoHuKA15K4Fd3qK1Tn8eTxDf5yh5PLeOTeYnxirAKQA7YG--9tw0A_4eTowzn4bPkcXURzEg=w1920-h1080-c",
      category: "Sports",
      caption: "Annual Sports Competition"
    },
    // Repeating images with different contexts for layout demonstration since we have limited source URLs
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c",
      category: "Facilities",
      caption: "Modern Computer Laboratory"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyBrX1bkCUuhCpqLlluf5F_JFyT_2sPRxU4C9Fl7rLcHvpNlMjv_bA8Gip3jUU5iz2l9VzfrNFCBHnRp7dHsKmsG7-3R_YBaqBWGs3PWgL1K3Jp4W1QzoZaTPBasASCrIcdd_h3=w1920-h1080-c",
      category: "Co-curricular",
      caption: "Creative Arts Session"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwpY-ShTkE-3YS3AuMOwwbq9nIrOkRQ2C4zMGVHTN3JowQTrsxtNkHpsZKi-D0KtoHuKA15K4Fd3qK1Tn8eTxDf5yh5PLeOTeYnxirAKQA7YG--9tw0A_4eTowzn4bPkcXURzEg=w1920-h1080-c",
      category: "Community",
      caption: "Graduation Ceremony"
    }
  ];

  const categories = ["All", "Academic", "Sports", "Events", "Facilities"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="pt-20 font-sans">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c"
            alt="School Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-academy-gold font-bold uppercase tracking-widest text-sm mb-2 block">Moments</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            A visual journey through life at Smart Kids School. From classroom activities to sports days, see our students in action.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-12 pb-6 bg-white sticky top-20 z-20 shadow-sm">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-academy-navy text-white shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 pt-8 bg-white min-h-[500px]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-slate-200 h-64 md:h-80"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <span className="text-academy-gold text-xs font-bold uppercase tracking-wider mb-1">{img.category}</span>
                   <h3 className="text-white font-bold text-lg">{img.caption}</h3>
                   <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                      <ZoomIn size={20} />
                   </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-w-full max-h-[90vh] rounded-sm shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};