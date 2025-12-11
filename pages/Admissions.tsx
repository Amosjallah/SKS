import React from 'react';
import { Download, HelpCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Admissions: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c"
            alt="Admissions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Admissions</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Begin your journey towards academic excellence. We welcome applications for the 2024-2025 academic year.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Steps */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-serif font-bold text-academy-navy mb-8">How to Apply</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-academy-navy text-white flex items-center justify-center font-bold font-serif text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-academy-navy mb-2">Submit Inquiry</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Complete the online inquiry form to receive our digital prospectus and schedule a campus tour.
                      We recommend visiting during the school day to see our classes in action.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-academy-navy text-white flex items-center justify-center font-bold font-serif text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-academy-navy mb-2">Application & Records</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Submit the formal application along with academic transcripts from the previous two years. 
                      Teacher recommendation letters are required from English and Math instructors.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-academy-navy text-white flex items-center justify-center font-bold font-serif text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-academy-navy mb-2">Entrance Assessment</h3>
                    <p className="text-slate-600 leading-relaxed">
                      All applicants must sit for the Independent School Entrance Exam (ISEE) or SSAT.
                      Assessments are held on campus on selected Saturdays in November and December.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-academy-navy text-white flex items-center justify-center font-bold font-serif text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-academy-navy mb-2">Family Interview</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Selected candidates will be invited for an interview. This is an opportunity for us to get to know 
                      the student beyond their grades and for your family to ask detailed questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-sm">
                <h3 className="text-xl font-serif font-bold text-academy-navy mb-4">Important Dates</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Application Deadline</span>
                    <span className="font-bold">January 15, 2024</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Financial Aid Application</span>
                    <span className="font-bold">February 1, 2024</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Decision Notification</span>
                    <span className="font-bold">March 10, 2024</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar / Inquiry Form */}
            <div className="lg:w-1/3">
              <div className="bg-white border-t-4 border-academy-gold shadow-xl p-8 sticky top-24">
                <h3 className="text-2xl font-serif font-bold text-academy-navy mb-6">Request Information</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Parent Name</label>
                    <input type="text" className="w-full border border-slate-300 p-3 rounded-sm focus:border-academy-navy focus:outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Email Address</label>
                    <input type="email" className="w-full border border-slate-300 p-3 rounded-sm focus:border-academy-navy focus:outline-none" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Student Grade Level</label>
                    <select className="w-full border border-slate-300 p-3 rounded-sm focus:border-academy-navy focus:outline-none bg-white">
                      <option>Select Grade...</option>
                      <option>9th Grade</option>
                      <option>10th Grade</option>
                      <option>11th Grade</option>
                      <option>12th Grade</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Message (Optional)</label>
                    <textarea className="w-full border border-slate-300 p-3 rounded-sm focus:border-academy-navy focus:outline-none h-24"></textarea>
                  </div>
                  <button className="w-full bg-academy-navy text-white font-bold uppercase tracking-widest py-4 hover:bg-slate-800 transition rounded-sm">
                    Submit Inquiry
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h4 className="font-bold text-academy-navy mb-4 flex items-center gap-2">
                    <Download size={20} className="text-academy-gold"/> Downloads
                  </h4>
                  <a href="#" className="block text-slate-600 hover:text-academy-gold text-sm mb-2 underline">2024-2025 Prospectus (PDF)</a>
                  <a href="#" className="block text-slate-600 hover:text-academy-gold text-sm underline">Tuition & Fees Schedule (PDF)</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-academy-navy py-16 text-white text-center">
         <div className="container mx-auto px-6">
            <HelpCircle size={48} className="mx-auto text-academy-gold mb-6 opacity-80" />
            <h2 className="text-3xl font-serif font-bold mb-4">Have Questions?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Our admissions team is here to guide you through every step of the process.
            </p>
            <NavLink 
              to="/faq" 
              className="inline-block border border-white/30 text-white px-8 py-3 uppercase tracking-wider text-sm font-bold hover:bg-white hover:text-academy-navy transition rounded-sm"
            >
              Visit FAQ Page
            </NavLink>
         </div>
      </section>
    </div>
  );
};