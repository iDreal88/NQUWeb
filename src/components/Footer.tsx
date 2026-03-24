import { Mail, Phone, MapPin, Globe, Share2, MessageSquare, ExternalLink, ArrowUpRight } from 'lucide-react';
import nquLogo from '../assets/nqu_logo.png';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const linkGroups = [
    {
      title: t('footer.quickLinks'),
      links: [
        { name: t('footer.admissions'), href: 'https://www.nqu.edu.tw/p/412-1000-881.php?Lang=zh-tw' },
        { name: t('footer.academics'), href: 'https://www.nqu.edu.tw/p/412-1000-842.php?Lang=zh-tw' },
        { name: t('footer.international'), href: 'https://oica.nqu.edu.tw/' },
        { name: t('footer.news'), href: 'https://www.nqu.edu.tw/p/403-1000-12.php?Lang=zh-tw' },
      ]
    },
    {
      title: t('footer.resources'),
      links: [
        { name: t('footer.portal'), href: 'https://select.nqu.edu.tw/' },
        { name: t('footer.elearning'), href: 'http://ecampus.nqu.edu.tw/' },
        { name: t('footer.library'), href: 'https://library.nqu.edu.tw/' },
        { name: t('footer.contact'), href: 'https://www.nqu.edu.tw/p/412-1000-880.php?Lang=zh-tw' },
      ]
    }
  ];

  return (
    <footer className="relative bg-nqu-purple pt-28 pb-10 text-white overflow-hidden border-t-8 border-nqu-orange">
      <div className="absolute top-0 right-0 w-96 h-96 bg-nqu-orange/5 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
          <div className="flex-1 max-w-sm">
            <a href="https://www.nqu.edu.tw/" className="flex items-center mb-10 group">
              <img src={nquLogo} alt="NQU Logo" className="h-14 w-auto object-contain" />
            </a>
            <p className="text-lg text-slate-100 mb-10 leading-relaxed font-light">
               {t('footer.desc')}
            </p>
            <div className="flex space-x-6">
               {[Share2, MessageSquare, Globe, ExternalLink].map((Icon, i) => (
                 <a key={i} href="https://www.facebook.com/nqu.edu.tw" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-2xl hover:bg-nqu-orange hover:text-nqu-purple hover:border-nqu-orange transition-all duration-300">
                   <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-32">
             {linkGroups.map((group) => (
                <div key={group.title} className="flex-1 min-w-[150px]">
                   <h4 className="text-xl font-bold text-nqu-orange mb-10 uppercase tracking-widest text-xs">{group.title}</h4>
                   <ul className="space-y-6">
                     {group.links.map((link) => (
                       <li key={link.name}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-white transition-colors flex items-center group">
                            <span className="font-semibold text-lg">{link.name}</span>
                            <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                       </li>
                     ))}
                   </ul>
                </div>
             ))}

             <div className="flex-1 min-w-[200px]">
                <h4 className="text-xl font-bold text-nqu-orange mb-10 uppercase tracking-widest text-xs">{t('footer.contactNqu')}</h4>
                <ul className="space-y-8">
                  <li className="flex items-start space-x-4 group">
                    <MapPin className="text-nqu-orange flex-shrink-0 mt-1" size={24} />
                    <span className="text-slate-100 text-lg leading-relaxed group-hover:text-white transition-colors">{t('footer.address')}</span>
                  </li>
                  <li className="flex items-center space-x-4 group">
                    <Phone className="text-nqu-orange flex-shrink-0" size={24} />
                    <span className="text-slate-100 text-lg group-hover:text-white transition-colors">+886-82-313300</span>
                  </li>
                  <li className="flex items-center space-x-4 group">
                    <Mail className="text-nqu-orange flex-shrink-0" size={24} />
                    <span className="text-slate-100 text-lg group-hover:text-white transition-colors">admission@nqu.edu.tw</span>
                  </li>
                </ul>
             </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-300 font-medium tracking-wide">
            &copy; {currentYear} {t('footer.rights')}
          </p>
          <div className="flex space-x-10">
            <a href="https://www.nqu.edu.tw/" className="text-slate-300 hover:text-white text-sm font-bold transition-colors">{t('footer.privacy')}</a>
            <a href="https://www.nqu.edu.tw/" className="text-slate-300 hover:text-white text-sm font-bold transition-colors">{t('footer.accessibility')}</a>
            <a href="https://portal.nqu.edu.tw/" className="text-slate-300 hover:text-white text-sm font-bold transition-colors">{t('footer.staff')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
