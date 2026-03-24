import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import campusHero from '../assets/nqu_campus_hero.png';
import collabImage from '../assets/student_collaboration_modern_library.png';
import globalImage from '../assets/nqu_global_connections.png';

const Admissions = () => {
  const admissionCards = [
    { title: '日間部招生訊息', image: campusHero },
    { title: '進修部招生訊息', image: collabImage },
    { title: '境外生招生訊息', image: globalImage },
    { title: '碩士班招生訊息', image: campusHero },
    { title: '博士班招生訊息', image: collabImage },
    { title: '轉學考招生訊息', image: globalImage },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  } as const;

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      {/* Breadcrumb Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 text-slate-800 font-medium text-sm lg:text-base">
          <Home size={18} className="text-nqu-purple" />
          <LinkToHome label="首頁" />
          <ChevronRight size={16} className="opacity-50" />
          <span className="text-slate-800 font-bold">招生資訊</span>
        </div>
      </div>

      <header className="max-w-7xl mx-auto px-4 mb-12">
         <h1 className="text-4xl font-display font-bold text-nqu-purple border-l-8 border-nqu-orange pl-6 mb-4">
            招生資訊
         </h1>
         <p className="text-slate-800 max-w-2xl font-medium leading-relaxed">
            歡迎加入國立金門大學，開啟您的學術卓越與全球創新之旅。
         </p>
      </header>

      {/* Main Grid Section */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {admissionCards.map((card, i) => (
            <motion.div 
              key={card.title + i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="group relative h-80 overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              <img 
                src={card.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={card.title} 
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/70 py-6 px-6 backdrop-blur-sm group-hover:bg-nqu-purple/90 transition-all duration-300">
                <div className="flex justify-between items-center">
                   <h3 className="text-white text-xl font-bold tracking-wide">{card.title}</h3>
                   <div className="w-10 h-10 rounded-full bg-nqu-orange flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ChevronRight size={20} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Links / Resources */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-nqu-purple mb-12">更多資源</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {['簡章下載', '線上報名', '常見問題', '獎助學金'].map((link) => (
                <button key={link} className="py-6 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 hover:border-nqu-purple hover:text-nqu-purple hover:shadow-xl transition-all duration-300">
                  {link}
                </button>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

// Helper internal component to avoid link-path complexity for this snippet
const LinkToHome = ({ label }: { label: string }) => (
  <span className="hover:text-nqu-purple cursor-pointer transition-colors">{label}</span>
);

export default Admissions;
