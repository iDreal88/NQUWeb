import { useState } from 'react';
import { Menu, X, Globe, Search, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import nquLogo from '../assets/nqu_logo.png';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: t('nav.home'), href: 'https://www.nqu.edu.tw/' },
    { name: t('nav.admissions'), href: 'https://www.nqu.edu.tw/p/412-1000-881.php?Lang=zh-tw' },
    { name: t('nav.academics'), href: 'https://www.nqu.edu.tw/p/412-1000-842.php?Lang=zh-tw' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 bg-nqu-header shadow-xl py-4 overflow-visible`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="https://www.nqu.edu.tw/" className="flex items-center group">
             <img src={nquLogo} alt="NQU Logo" className="h-14 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Hanging Circular Buttons */}
            <div className="flex items-center space-x-6 relative top-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-28 h-28 rounded-full border-4 border-white flex items-center justify-center text-center p-2 transition-all duration-300 transform shadow-2xl bg-nqu-header hover:bg-nqu-purple hover:-translate-y-2`}
                >
                  <span className={`text-white font-bold leading-tight break-words px-2 ${language === 'en' ? 'text-lg' : 'text-xl'}`}>
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Standard Secondary Buttons (No Offset) */}
            <div className="flex items-center space-x-3 ml-6">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all relative group"
              >
                {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
                </span>
              </button>

              <button 
                onClick={toggleLanguage}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all relative group"
              >
                 <Globe size={22} />
                 <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {language === 'zh' ? 'SWITCH TO ENGLISH' : '切換至中文'}
                 </span>
              </button>
              
              <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                 <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-nqu-header border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-2xl text-xl font-bold text-white transition-all hover:bg-white/10`}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-6 py-4 rounded-2xl text-xl font-bold text-white hover:bg-nqu-orange/20"
              >
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
              </button>
              <button 
                onClick={toggleLanguage}
                className="w-full flex items-center justify-between px-6 py-4 rounded-2xl text-xl font-bold text-white hover:bg-white/10"
              >
                <span>{language === 'zh' ? 'English' : '中文'}</span>
                <Globe size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
