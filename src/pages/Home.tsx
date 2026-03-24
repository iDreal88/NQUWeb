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
    { title: '從課堂到社區、從文學到科技—華語文學系「AI繪紅樓·紅樓會AI」展覽...', date: 'March 15, 2026', category: '[華語文學系]', image: campusHero, href: 'https://www.nqu.edu.tw/p/403-1000-12.php?Lang=zh-tw' },
    { title: '高粱田黑化像燒焦! 金門大學「空中救援」，幫農民應戰氣候變遷', date: 'March 10, 2026', category: '[國立金門大學]', image: globalImage, href: 'https://www.nqu.edu.tw/p/403-1000-12.php?Lang=zh-tw' },
    { title: '「Autodesk創意設計競賽」 金大3學子勇奪金獎', date: 'March 8, 2026', category: '[國立金門大學]', image: collabImage, href: 'https://www.nqu.edu.tw/p/403-1000-12.php?Lang=zh-tw' },
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

      {/* Stats Section */}
      <section className="relative z-20 py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-nqu-orange/30 transition-all duration-500 shadow-sm hover:shadow-xl group"
              >
                <div className="text-nqu-orange mb-4 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-4xl font-bold text-nqu-purple dark:text-white mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f1f5f9] dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div {...fadeIn} className="flex-1">
              <span className="text-nqu-orange font-bold uppercase tracking-widest text-sm mb-4 block">{t('about.badge')}</span>
              <h2 className="text-5xl font-display font-bold text-nqu-purple dark:text-white mb-8 leading-tight">{t('about.title')}</h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                  <a href="https://www.nqu.edu.tw/p/412-1000-842.php?Lang=zh-tw" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white text-nqu-purple font-bold rounded-2xl shadow-xl hover:bg-slate-50 transition-all duration-300">
                    {t('about.button')}
                  </a>
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.3 }}
              className="flex-1 relative"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl scale-105">
                <img src={collabImage} alt="Students" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-nqu-purple/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-nqu-orange font-bold uppercase tracking-widest text-sm mb-4 block">{t('news.badge')}</span>
              <h2 className="text-5xl font-display font-bold text-nqu-purple dark:text-white">{t('news.title')}</h2>
            </div>
              <a href="https://www.nqu.edu.tw/p/403-1000-12.php?Lang=zh-tw" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center space-x-2 text-slate-600 dark:text-slate-300 font-bold hover:text-nqu-purple transition-colors">
                <Calendar size={20} />
                <span>{t('news.more')}</span>
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
                className="group relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                   <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-nqu-purple dark:text-white mb-4 line-clamp-2 h-14 group-hover:text-nqu-orange transition-colors duration-300">{item.title}</h3>
                  <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400 font-medium font-display">
                    <span>{item.date}</span>
                    <span className="text-nqu-orange font-bold uppercase tracking-wider">{item.category}</span>
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
