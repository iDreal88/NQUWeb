import { motion } from 'framer-motion';
import { ArrowRight, Users, Globe2, BookOpen, MapPin, Calendar } from 'lucide-react';
import campusHero from '../assets/nqu_hero.png';
import collabImage from '../assets/nqu_collab.png';
import globalImage from '../assets/nqu_international.png';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t, language } = useLanguage();

  const stats = [
    { label: t('stats.students'), value: '10,000+', icon: <Users size={28} /> },
    { label: t('stats.international'), value: '500+', icon: <Globe2 size={28} /> },
    { label: t('stats.programs'), value: '35+', icon: <BookOpen size={28} /> },
    { label: t('stats.campus'), value: '150+', icon: <MapPin size={28} /> },
  ];

  const news = [
    { title: '從課堂到社區、從文學到科技—華語文學系「AI繪紅樓·紅樓會AI」展覽...', date: 'March 15, 2026', category: '[華語文學系]', image: campusHero, href: 'https://www.nqu.edu.tw/p/402-1000-5-1.php?Lang=zh-tw' },
    { title: '高粱田黑化像燒焦! 金門大學「空中救援」，幫農民應戰氣候變遷', date: 'March 10, 2026', category: '[國立金門大學]', image: globalImage, href: 'https://www.nqu.edu.tw/p/402-1000-5-1.php?Lang=zh-tw' },
    { title: '「Autodesk創意設計競賽」 金大3學子勇奪金獎', date: 'March 8, 2026', category: '[國立金門大學]', image: collabImage, href: 'https://www.nqu.edu.tw/p/402-1000-5-1.php?Lang=zh-tw' },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: "easeOut" }
  } as const;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full">
          <img 
            src={campusHero}
            alt="NQU Campus"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-nqu-purple/80 via-nqu-purple/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className={`max-w-3xl pt-32`}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-nqu-orange/60 backdrop-blur-lg border border-nqu-orange shadow-lg text-white text-sm font-bold uppercase tracking-widest mb-6">
              {t('hero.badge')}
            </span>
            <h1 className={`font-display font-bold leading-tight mb-8 ${language === 'en' ? 'text-5xl md:text-7xl' : 'text-6xl md:text-8xl'}`}>
              {t('hero.title')} <br /> 
              <span className="text-nqu-orange">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed font-light max-w-2xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="https://www.nqu.edu.tw/p/412-1000-881.php?Lang=zh-tw" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-nqu-orange hover:bg-nqu-accent text-white font-bold rounded-2xl shadow-2xl hover:shadow-nqu-orange/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                {t('hero.apply')} <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="https://www.nqu.edu.tw/p/412-1000-842.php?Lang=zh-tw" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                {t('hero.discover')}
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10 hidden md:flex">
          <span className="text-white/50 text-[10px] uppercase tracking-widest mb-2 font-bold">{t('hero.scroll')}</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent opacity-50"></div>
        </div>

        {/* WELCOME TO NQU Ticker */}
        <div className="absolute bottom-0 w-full bg-nqu-orange py-4 overflow-hidden z-20 shadow-2xl border-t border-white/20">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-white text-2xl font-black uppercase tracking-widest px-8">
                {t('hero.ticker')}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dual-Theme Stats Section */}
      <section className="relative z-20 py-24 bg-white dark:bg-black overflow-hidden border-t-0 dark:border-t dark:border-white/10 transition-colors duration-500">
        {/* Glow Effects (Dark Mode Only) */}
        <div className="hidden dark:block absolute top-1/2 left-1/4 w-96 h-96 bg-nqu-purple/40 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="hidden dark:block absolute top-1/2 right-1/4 w-96 h-96 bg-nqu-orange/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-slate-50 border-slate-100 border dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-2xl hover:border-nqu-orange/30 dark:hover:border-nqu-orange/50 dark:hover:bg-white/10 transition-all duration-500 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_40px_rgba(230,126,34,0.2)] group relative overflow-hidden"
              >
                <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-nqu-orange mb-4 group-hover:scale-110 transition-transform duration-500 dark:drop-shadow-[0_0_10px_rgba(230,126,34,0.5)]">{stat.icon}</div>
                <div className="text-4xl font-bold text-nqu-purple dark:text-white mb-2 font-display tracking-tight">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-300 font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual-Theme About Section */}
      <section className="py-24 md:py-32 bg-[#f1f5f9] dark:bg-gradient-to-b dark:from-black dark:via-[#0d0415] dark:to-black relative overflow-hidden transition-colors duration-500">
        {/* Starfield / Grid Effect Background (Dark Mode) */}
        <div className="hidden dark:block absolute inset-0 bg-[url('https://transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-screen"></div>
        <div className="hidden dark:block absolute top-0 right-0 w-[800px] h-[800px] bg-nqu-purple/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">
            <motion.div {...fadeIn} className="flex-1 relative">
              <div className="hidden dark:block absolute -left-10 top-10 w-32 h-32 bg-nqu-orange/30 rounded-full blur-[50px]"></div>
              
              <span className="inline-block px-4 py-1 rounded-full bg-nqu-purple/10 dark:bg-nqu-purple/50 border border-nqu-purple/20 dark:border-nqu-purple text-nqu-purple dark:text-nqu-orange font-bold uppercase tracking-widest text-sm md:text-xs mb-6 dark:shadow-[0_0_20px_rgba(112,72,143,0.5)]">{t('about.badge')}</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-nqu-purple dark:text-white mb-8 leading-tight dark:drop-shadow-2xl">{t('about.title')}</h2>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed font-normal dark:font-light">
                {t('about.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                  {/* Light: Clean Button | Dark: Glowing Button */}
                  <a href="https://www.nqu.edu.tw/p/412-1000-842.php?Lang=zh-tw" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white dark:bg-nqu-orange hover:bg-slate-50 dark:hover:bg-nqu-accent text-nqu-purple dark:text-white font-bold rounded-2xl shadow-xl dark:shadow-[0_0_30px_rgba(230,126,34,0.4)] transition-all duration-300 text-center flex items-center justify-center group overflow-hidden relative">
                    <span className="relative z-10 flex items-center">{t('about.button')} <ArrowRight className="hidden dark:block ml-2 group-hover:translate-x-1 transition-transform" size={18} /></span>
                    <div className="hidden dark:block absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </a>
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.3 }}
              className="flex-1 relative w-full"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl dark:shadow-[0_0_50px_rgba(112,72,143,0.3)] dark:border dark:border-white/10 group scale-105">
                <div className="hidden dark:block absolute inset-0 bg-nqu-purple/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay"></div>
                <img src={collabImage} alt="Students" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20"></div>
                
                {/* Holographic UI Elements over image (Dark Mode Only) */}
                <div className="hidden dark:flex absolute bottom-10 left-10 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-nqu-orange flex items-center justify-center animate-pulse">
                     <Globe2 className="text-white" size={24} />
                   </div>
                   <div>
                     <div className="text-white font-bold tracking-wider text-sm uppercase">Global Reach</div>
                     <div className="text-nqu-orange font-display font-bold text-xl">100%</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual-Theme News Section */}
      <section className="py-24 md:py-32 bg-white dark:bg-black relative overflow-hidden dark:border-t dark:border-white/5 transition-colors duration-500">
        <div className="hidden dark:block absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-nqu-purple/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              {/* Badge: Simple Orange in Light, Hollow Glowing in Dark */}
              <span className="inline-block dark:px-3 dark:py-1 dark:rounded-full bg-transparent dark:bg-white/5 border-none dark:border-solid border-white/10 text-nqu-orange font-bold uppercase tracking-widest text-sm dark:text-xs mb-4">{t('news.badge')}</span>
              
              {/* Title: Purple in Light, Silver Gradient in Dark */}
              <h2 className="text-5xl md:text-6xl font-display font-bold text-nqu-purple dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-slate-400">{t('news.title')}</h2>
            </div>
              <a href="https://www.nqu.edu.tw/p/402-1000-5-1.php?Lang=zh-tw" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center space-x-2 text-slate-600 dark:text-slate-300 font-bold hover:text-nqu-purple dark:hover:text-nqu-orange transition-colors group">
                <Calendar size={20} className="dark:group-hover:animate-pulse" />
                <span className="uppercase tracking-wider text-sm">{t('news.more')}</span>
              </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {news.map((item, i) => (
              <motion.a 
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl dark:rounded-[2.5rem] bg-slate-50 dark:bg-white/5 dark:backdrop-blur-xl border border-slate-100 dark:border-white/10 hover:shadow-2xl dark:hover:border-nqu-purple/50 transition-all duration-500 flex flex-col dark:hover:-translate-y-2 dark:hover:shadow-[0_20px_50px_rgba(112,72,143,0.3)]"
              >
                <div className="h-48 dark:h-56 overflow-hidden relative">
                   <div className="hidden dark:block absolute inset-0 bg-nqu-purple/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                   <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 dark:duration-700" alt={item.title} />
                   <div className="hidden dark:block absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20"></div>
                </div>
                <div className="p-8 relative z-30 dark:-mt-6">
                  {/* Category: Orange text in Light, Solid pill in Dark */}
                  <span className="dark:inline-block dark:px-3 dark:py-1 dark:bg-nqu-orange dark:text-white dark:text-xs text-nqu-orange font-bold uppercase tracking-wider dark:rounded-full mb-4 dark:shadow-[0_0_15px_rgba(230,126,34,0.5)] flex justify-end dark:justify-start">{item.category}</span>
                  
                  <h3 className="text-xl font-bold text-nqu-purple dark:text-white mb-4 dark:mb-6 line-clamp-2 h-14 group-hover:text-nqu-orange transition-colors duration-300 dark:leading-snug">{item.title}</h3>
                  <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400 font-medium font-display dark:group-hover:text-slate-200 transition-colors">
                    <span className="flex items-center gap-2"><Calendar className="hidden dark:block" size={14}/> {item.date}</span>
                    <ArrowRight size={16} className="hidden dark:block text-nqu-purple group-hover:text-nqu-orange group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-nqu-purple">
           <img src={globalImage} className="w-full h-full object-cover opacity-20" alt="Global" />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">{t('cta.title')}</h2>
            <p className="text-xl text-slate-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <a href="https://oica.nqu.edu.tw/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-5 bg-white text-nqu-purple font-bold rounded-2xl hover:bg-slate-50 transition-all duration-300 shadow-xl">
                  {t('cta.center')}
                </a>
                <a href="https://oica.nqu.edu.tw/p/412-1081-6785.php?Lang=zh-tw" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  {t('cta.scholarship')}
                </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
