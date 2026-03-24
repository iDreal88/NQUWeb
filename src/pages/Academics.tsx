import { motion } from 'framer-motion';
import { Book, Code, Building, FlaskConical, Search, Globe, Lightbulb, ArrowUpRight } from 'lucide-react';
import globalImage from '../assets/nqu_global_connections.png';

const Academics = () => {
  const departments = [
    { name: '管理學院', icon: <Building className="text-nqu-orange" size={36} />, color: 'bg-blue-50 dark:bg-blue-900/10', href: 'https://cm.nqu.edu.tw/' },
    { name: '理工學院', icon: <Code className="text-nqu-orange" size={36} />, color: 'bg-emerald-50 dark:bg-emerald-900/10', href: 'https://coe.nqu.edu.tw/' },
    { name: '人文社會學院', icon: <Book className="text-nqu-orange" size={36} />, color: 'bg-amber-50 dark:bg-amber-900/10', href: 'https://chs.nqu.edu.tw/' },
    { name: '健康護理學院', icon: <FlaskConical className="text-nqu-orange" size={36} />, color: 'bg-rose-50 dark:bg-rose-900/10', href: 'https://chn.nqu.edu.tw/' },
  ];

  const highlights = [
    { title: 'Global Collaborative Research', desc: 'Over 20+ active international research projects spanning 3 continents.', icon: <Globe size={24} /> },
    { title: 'Industry Integration', desc: 'Practical internships with leading global companies for every senior student.', icon: <Lightbulb size={24} /> },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  } as const;

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <header className="relative py-28 bg-[#fdfdfd] dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-nqu-orange/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeIn}>
            <span className="text-nqu-orange font-bold uppercase tracking-widest text-sm mb-4 block">Academic Catalog</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-nqu-purple dark:text-white mb-8 leading-tight">Excellence Across Every <br /> <span className="text-nqu-accent">Academic Discipline</span></h1>
            <p className="text-xl text-slate-800 dark:text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
               NQU empowers students with advanced curriculum design and comprehensive academic resources, from undergraduate foundations to pioneering research.
            </p>
            <div className="relative max-w-2xl mx-auto flex items-center">
              <input 
                type="text" 
                placeholder="Search for departments, courses, or faculty..."
                className="w-full px-10 py-5 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-4 focus:ring-nqu-orange/20 text-lg transition-all"
              />
              <Search className="absolute right-6 text-slate-200" size={24} />
            </div>
          </motion.div>
        </div>
      </header>

      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {departments.map((dept, i) => (
              <motion.a 
                key={dept.name}
                href={dept.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${dept.color} p-12 rounded-[50px] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-nqu-orange/20 block`}
              >
                 <div className="mb-8 flex justify-between items-start">
                    <div className="p-5 bg-white dark:bg-slate-800 rounded-[30px] shadow-md group-hover:scale-110 transition-transform duration-500">
                      {dept.icon}
                    </div>
                    <ArrowUpRight size={32} className="text-slate-100 group-hover:text-nqu-orange transition-colors hover:rotate-45 duration-500" />
                 </div>
                 <h3 className="text-3xl font-display font-bold text-nqu-purple dark:text-white mb-6 group-hover:text-nqu-accent transition-colors">{dept.name}</h3>
                 <p className="text-lg text-slate-900 dark:text-slate-200 mb-8 leading-relaxed font-medium">
                    探索具創新、管理及人文卓越特色的學術領域，為未來的全球領導者提供全方位的課程與研究資源。
                 </p>
                 <span className="inline-block px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-nqu-purple dark:text-white font-bold rounded-2xl group-hover:bg-nqu-orange group-hover:text-white transition-all duration-300">
                    進入學院網站
                 </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1 w-full relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl skew-y-3">
                   <img src={globalImage} className="w-full h-80 object-cover" alt="Academia" />
                </div>
                <div className="absolute -bottom-6 -right-6 p-10 bg-nqu-orange rounded-[40px] shadow-2xl -skew-y-3 hidden md:block">
                   <p className="text-4xl font-display font-black text-nqu-purple">98%</p>
                   <p className="text-nqu-purple font-bold text-sm tracking-widest uppercase">Graduation Rate</p>
                </div>
             </div>
             <div className="flex-1">
                 <span className="text-nqu-orange font-bold uppercase tracking-widest text-sm mb-4 block">Academic Philosophy</span>
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-nqu-purple dark:text-white mb-10 leading-tight">Innovative Curriculums Integrated with Industrial Realities</h2>
                 <div className="space-y-10">
                    {highlights.map((h) => (
                      <div key={h.title} className="flex space-x-6">
                         <div className="flex-shrink-0 w-12 h-12 bg-nqu-purple text-nqu-orange rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                            {h.icon}
                         </div>
                         <div>
                            <h4 className="text-xl font-bold text-nqu-purple dark:text-white mb-2">{h.title}</h4>
                            <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{h.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <a href="https://www.nqu.edu.tw/p/412-1000-842.php?Lang=zh-tw" target="_blank" rel="noopener noreferrer" className="mt-12 group inline-flex items-center space-x-4 px-10 py-5 bg-white dark:bg-slate-800 border-2 border-nqu-orange/30 text-nqu-purple dark:text-white font-bold rounded-3xl hover:bg-nqu-orange hover:text-white transition-all duration-300">
                   <span>FULL COURSE CATALOG</span>
                   <Search size={20} />
                 </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
