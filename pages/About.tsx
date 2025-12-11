import React from 'react';
import { FACULTY } from '../data';
import { Award, BookOpen, Clock, Heart, Shield, Star, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c"
            alt="About Smart Kids School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-academy-gold font-bold uppercase tracking-widest text-sm mb-2 block">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">About Smart Kids</h1>
          <p className="text-slate-100 text-lg max-w-2xl mx-auto leading-relaxed">
            More than just a school, we are a community dedicated to raising the next generation of leaders through excellence and character.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="group bg-slate-50 p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-academy-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Award className="text-academy-gold" size={32} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-academy-navy mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                "To provide a stimulating learning environment where every child is encouraged 
                to reach their full potential academically, socially, and morally. We aim to 
                raise confident, creative, and smart leaders for the future."
              </p>
            </div>
            <div className="group bg-academy-navy p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white/5 w-32 h-32 rounded-bl-full"></div>
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Star className="text-academy-gold" size={32} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed text-lg relative z-10">
                "To be the preferred school of choice for holistic basic education, 
                known for academic excellence and the disciplined upbringing of children."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History / Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                 <div className="relative">
                    <div className="absolute -inset-4 bg-academy-gold/20 rounded-2xl transform rotate-3"></div>
                    {/* Using Image 1 for History Context */}
                    <img 
                      src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1000-h800-c" 
                      alt="School History" 
                      className="relative rounded-2xl shadow-2xl w-full object-cover" 
                    />
                 </div>
              </div>
              <div className="lg:w-1/2">
                 <span className="text-academy-gold font-bold uppercase tracking-widest text-sm">Our Journey</span>
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-academy-navy mt-2 mb-6">A Legacy Since 2008</h2>
                 <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    Smart Kids School began as a humble initiative to provide quality early childhood education to the local community.
                    What started with just a handful of students and a vision has grown into a premier institution offering comprehensive basic education.
                 </p>
                 
                 <div className="space-y-8 border-l-2 border-slate-200 pl-8 ml-2">
                    <div className="relative">
                       <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white bg-academy-gold"></span>
                       <h4 className="font-bold text-academy-navy text-xl">2008</h4>
                       <p className="text-slate-500">Established with Creche & Nursery Department.</p>
                    </div>
                    <div className="relative">
                       <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white bg-academy-navy"></span>
                       <h4 className="font-bold text-academy-navy text-xl">2012</h4>
                       <p className="text-slate-500">Expansion to Lower Primary and new block commissioning.</p>
                    </div>
                    <div className="relative">
                       <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white bg-academy-navy"></span>
                       <h4 className="font-bold text-academy-navy text-xl">2017</h4>
                       <p className="text-slate-500">First batch of JHS graduates with 100% distinction.</p>
                    </div>
                     <div className="relative">
                       <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white bg-academy-gold"></span>
                       <h4 className="font-bold text-academy-navy text-xl">Today</h4>
                       <p className="text-slate-500">A thriving community of scholars and future leaders.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-academy-navy text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-academy-gold rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-300 text-lg">
              These principles guide our interactions, decisions, and the way we teach every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: <Shield />, title: "Integrity", desc: "We teach students to be honest and principled in all their actions." },
               { icon: <Award />, title: "Excellence", desc: "We strive for the highest standards in academics and conduct." },
               { icon: <Heart />, title: "Compassion", desc: "We foster kindness, empathy, and respect for others." },
               { icon: <Clock />, title: "Discipline", desc: "Punctuality and self-control are key pillars of our culture." },
               { icon: <BookOpen />, title: "Curiosity", desc: "We encourage questions and the lifelong love of learning." },
               { icon: <Users />, title: "Teamwork", desc: "Collaboration is essential for success in the modern world." }
             ].map((val, idx) => (
               <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300">
                  <div className="text-academy-gold mb-4 p-3 bg-white/5 inline-block rounded-xl">
                    {React.cloneElement(val.icon, { size: 28 })}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{val.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <span className="text-academy-gold font-bold uppercase tracking-widest text-sm mb-2 block">Our Approach</span>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-academy-navy mb-8">Holistic Education</h2>
           <p className="text-slate-600 text-lg leading-loose mb-12">
             At Smart Kids School, we believe that education is not just about passing exams. It is about 
             developing the whole child. Our "Child-Centered Approach" ensures that we recognize the unique 
             learning style of each student. We integrate academic rigor with creative arts, sports, 
             and moral instruction to produce well-rounded individuals ready for the world.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-slate-100 rounded-full text-academy-navy font-bold text-sm">Child-Centered</span>
              <span className="px-6 py-3 bg-slate-100 rounded-full text-academy-navy font-bold text-sm">Inquiry-Based</span>
              <span className="px-6 py-3 bg-slate-100 rounded-full text-academy-navy font-bold text-sm">Technology Integrated</span>
              <span className="px-6 py-3 bg-slate-100 rounded-full text-academy-navy font-bold text-sm">Values Driven</span>
           </div>
        </div>
      </section>

      {/* Head's Message */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 shrink-0 relative">
               <div className="absolute inset-0 bg-academy-gold rounded-2xl transform translate-x-2 translate-y-2"></div>
               {/* Using Image 2 for Headmistress Message */}
               <img 
                 src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyBrX1bkCUuhCpqLlluf5F_JFyT_2sPRxU4C9Fl7rLcHvpNlMjv_bA8Gip3jUU5iz2l9VzfrNFCBHnRp7dHsKmsG7-3R_YBaqBWGs3PWgL1K3Jp4W1QzoZaTPBasASCrIcdd_h3=w800-h1000-c" 
                 alt="Headmistress" 
                 className="w-full shadow-lg rounded-2xl relative z-10 object-cover"
               />
            </div>
            <div className="md:w-2/3">
              <span className="text-academy-gold font-bold uppercase tracking-widest text-xs mb-2 block">Leadership</span>
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
                <div className="mt-8 flex items-center gap-4">
                   <div className="flex flex-col">
                      <span className="font-serif font-bold text-academy-navy text-lg">Mrs. Eleanor Vance</span>
                      <span className="text-sm text-slate-500 uppercase tracking-wider">Headmistress</span>
                   </div>
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
                <div className="relative overflow-hidden rounded-2xl mb-6 inline-block w-full shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-[3/4] object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-academy-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <p className="text-white text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <h3 className="font-serif font-bold text-lg text-academy-navy group-hover:text-academy-gold transition-colors">{member.name}</h3>
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