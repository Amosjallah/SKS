import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, BookOpen, Clock } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Admissions",
      questions: [
        {
          q: "What is the age requirement for Creche?",
          a: "We accept children from 6 months old into our Creche department. Our Nursery program starts at age 3."
        },
        {
          q: "When is the admission deadline for the next academic year?",
          a: "While we have rolling admissions subject to vacancy, priority applications for the major intake in September usually close by January 15th."
        },
        {
          q: "Do you accept mid-term transfers?",
          a: "Yes, we accept transfer students depending on the availability of space in the specific grade level. Transcripts from the previous school will be required."
        }
      ]
    },
    {
      category: "Academics",
      questions: [
        {
          q: "What curriculum does the school follow?",
          a: "We follow the Ghana Education Service (GES) new curriculum (NaCCA), enriched with Montessori principles in the preschool department to provide a holistic educational experience."
        },
        {
          q: "What is the average class size?",
          a: "To ensure personalized attention, our maximum class size is 15 students for Preschool and 20-25 students for Primary and JHS."
        },
        {
          q: "Do you offer French?",
          a: "Yes, French is a compulsory core subject from Primary 1 through to Junior High School."
        }
      ]
    },
    {
      category: "General Information",
      questions: [
        {
          q: "What are the school hours?",
          a: "School starts at 7:30 AM and ends at 3:30 PM. However, children can be dropped off as early as 7:00 AM. Extra-curricular activities may run until 4:30 PM."
        },
        {
          q: "Is there a school bus service?",
          a: "Yes, we offer door-to-door transportation services for selected routes within Accra. Please contact the administration for route maps and fees."
        },
        {
          q: "Do students wear uniforms?",
          a: "Yes, students are required to wear the prescribed school uniform. We have a distinct ceremonial wear for Mondays and specific sportswear for PE days."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5vdy_uEM2nHEEcyJw3H5Fa1H4GEnle7U5EasSXzjzWKvC0ztR2mmrdgNteT4jx-Oo6hW-XLzG3N12jXlWF8bBv2ERto1Up83LYoiBr90h5LSGBO-QFRmr8RAM-0Q5rMlgADM=w1920-h1080-c"
            alt="FAQ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-academy-navy/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <HelpCircle size={48} className="mx-auto text-academy-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Find answers to common questions about admissions, academics, and student life at Smart Kids School.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {faqs.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-serif font-bold text-academy-navy mb-6 border-b border-slate-200 pb-2">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, idx) => {
                  const globalIndex = sectionIdx * 100 + idx; // Unique ID for accordion state
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div 
                      key={idx} 
                      className={`border rounded-sm transition-all duration-300 ${isOpen ? 'border-academy-gold bg-slate-50' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                      >
                        <span className={`font-bold text-lg ${isOpen ? 'text-academy-navy' : 'text-slate-700'}`}>
                          {faq.q}
                        </span>
                        <span className={`text-academy-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </span>
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-16 p-8 bg-academy-navy text-white rounded-sm text-center">
            <h3 className="font-serif font-bold text-xl mb-4">Still have questions?</h3>
            <p className="text-slate-300 mb-6">
              Can't find what you're looking for? Please contact our admissions office directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm">
               <div className="flex items-center justify-center gap-2">
                  <BookOpen size={16} className="text-academy-gold" />
                  <span>info@smartkids.edu.gh</span>
               </div>
               <div className="flex items-center justify-center gap-2">
                  <Clock size={16} className="text-academy-gold" />
                  <span>Mon-Fri: 7:30 AM - 4:30 PM</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};