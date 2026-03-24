import { motion } from 'framer-motion';
import { Globe, Plane, Home as HomeIcon, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import globalImage from '../assets/nqu_global_connections.png';

const International = () => {
  const features = [
    { title: 'Global Connectivity', description: 'Join fellow students from over 40+ countries. Our campus is a melting pot of cultures, ideas, and academic passion.', icon: <Globe className="text-nqu-orange" size={36} /> },
    { title: 'Visa & Immigration', description: 'Dedicated support team to guide you through visa applications, alien resident certificates (ARC), and more.', icon: <ShieldCheck className="text-nqu-orange" size={36} /> },
    { title: 'Accommodation', description: 'Secure on-campus dormitories and assistance for off-campus housing that feels like home from day one.', icon: <HomeIcon className="text-nqu-orange" size={36} /> },
    { title: 'Scholarships', description: 'Generous financial aid and merit-based scholarships for outstanding international applicants.', icon: <Plane className="text-nqu-orange" size={36} /> },
  ];

  return (
    <div className="pt-24 pb-24">
      <header className="relative py-28 bg-nqu-purple overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={globalImage} className="w-full h-full object-cover opacity-30" alt="Global Connectivity" />
          <div className="absolute inset-0 bg-gradient-to-tr from-nqu-purple/60 via-transparent to-nqu-purple/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-nqu-orange/20 backdrop-blur-md border border-nqu-orange/30 text-nqu-orange text-sm font-bold tracking-widest uppercase mb-6">
              Global Center
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8">
               United Under One <br /> 
               <span className="text-nqu-orange">International Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed font-light max-w-4xl mx-auto">
               National Quemoy University welcomes international students seeking high-quality academic training in a vibrant, safe, and welcoming environment.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 -mt-24 relative z-20">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-10 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-700 hover:border-nqu-orange transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-nqu-purple dark:text-white mb-4 leading-tight">{feature.title}</h3>
                <p className="text-slate-800 dark:text-slate-200 mb-8 leading-relaxed font-medium">
                  {feature.description}
                </p>
                <button className="flex items-center text-nqu-purple dark:text-nqu-orange font-bold hover:translate-x-2 transition-transform duration-300">
                  LEARN MORE <ArrowRight size={18} className="ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-20">
             <div className="flex-1 w-full order-2 md:order-1">
                <div className="relative p-10 bg-white dark:bg-slate-800 rounded-[60px] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
                    <h3 className="text-3xl font-display font-bold text-nqu-purple dark:text-white mb-8">FAQ for New Applicants</h3>
                    <div className="space-y-6">
                       {[ 
                         'How do I apply for a student visa?',
                         'What are the language proficiency requirements?',
                         'Are there specific scholarships for Southeast Asia?',
                         'How is the cost of living in Quemoy?'
                       ].map((q, i) => (
                         <div key={i} className="flex justify-between items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors pointer-cursor group">
                            <div className="flex items-center space-x-4">
                               <HelpCircle size={20} className="text-nqu-orange" />
                               <span className="font-bold text-nqu-purple dark:text-white text-lg">{q}</span>
                            </div>
                            <ChevronRight size={18} className="text-slate-200 group-hover:translate-x-1 transition-transform" />
                         </div>
                       ))}
                    </div>
                </div>
             </div>
             <div className="flex-1 order-1 md:order-2">
                 <span className="text-nqu-orange font-bold uppercase tracking-widest text-sm mb-4 block">Student Life</span>
                 <h2 className="text-5xl font-display font-bold text-nqu-purple dark:text-white mb-8 leading-tight">Embark on a Cultural Journey Across Borders</h2>
                 <p className="text-lg text-slate-900 dark:text-slate-200 mb-10 leading-relaxed max-w-xl">
                   At NQU, we don't just teach. We celebrate diversity. From annual cultural exchange festivals to local field trips, you'll experience life in a whole new dimension. 
                 </p>
                 <div className="flex space-x-4">
                    <button className="px-12 py-5 bg-nqu-purple text-white font-bold rounded-[30px] hover:bg-nqu-accent hover:text-nqu-purple transition-all duration-300 shadow-xl">
                      GET STUDENT BROCHURE
                    </button>
                    <button className="p-5 border-2 border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                       <HelpCircle className="text-slate-800" size={24} />
                    </button>
                 </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ChevronRight = ({size, className}: {size: number, className: string}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default International;
