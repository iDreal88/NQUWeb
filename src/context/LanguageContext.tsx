import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    'nav.home': '金大首頁',
    'nav.admissions': '招生資訊',
    'nav.academics': '院系介紹',
    'hero.badge': '通往卓越的門戶',
    'hero.title': '在金大',
    'hero.subtitle': '打造您的未來',
    'hero.description': '體驗傳統與創新交匯的世界級教育。國立金門大學是您通往全球學術旅程的入口。',
    'hero.apply': '立即申請',
    'hero.discover': '探索學位課程',
    'hero.scroll': '向下滾動探索',
    'hero.ticker': '歡迎來到金大',
    'stats.students': '學生總數',
    'stats.international': '國際學生',
    'stats.programs': '學位課程',
    'stats.campus': '校園面積',
    'news.title': '最新消息與活動',
    'news.badge': '保持更新',
    'news.more': '查看完整行事曆',
    'cta.title': '準備好開始您的全球學術旅程了嗎？',
    'cta.description': '國立金門大學為來自世界各地的國際學生提供支持。加入我們，發現您的潛力。',
    'cta.center': '國際事務中心',
    'cta.scholarship': '獎學金資訊',
    'about.badge': '學術卓越',
    'about.title': '各院系的全球視野',
    'about.description': '金門大學提供獨特的文化與學術環境。位於歷史與現代發展的交匯點，我們的學生受益於跨學科的學習方式，培養國際競爭力。',
    'about.button': '探索院系',
  },
  en: {
    'nav.home': 'NQU Home',
    'nav.admissions': 'Admissions',
    'nav.academics': 'Academics',
    'hero.badge': 'Gateway of Excellence',
    'hero.title': 'Shape Your Future',
    'hero.subtitle': 'at NQU',
    'hero.description': 'Experience a world-class education where tradition meets innovation. National Quemoy University is your portal to a global academic journey.',
    'hero.apply': 'APPLY NOW',
    'hero.discover': 'DISCOVER PROGRAMS',
    'hero.scroll': 'Scroll to Explore',
    'hero.ticker': 'WELCOME TO NQU',
    'stats.students': 'Total Students',
    'stats.international': 'International Students',
    'stats.programs': 'Degree Programs',
    'stats.campus': 'Campus Size',
    'news.title': 'Latest News & Events',
    'news.badge': 'STAY UPDATED',
    'news.more': 'VIEW FULL CALENDAR',
    'cta.title': 'Ready to Start Your Global Academic Journey?',
    'cta.description': 'National Quemoy University provides a supportive environment for international students from all corners of the globe. Join us and discover your potential.',
    'cta.center': 'INTERNATIONAL CENTER',
    'cta.scholarship': 'SCHOLARSHIP INFO',
    'about.badge': 'ACADEMIC EXCELLENCE',
    'about.title': 'A Global Perspective in Every Department',
    'about.description': 'NQU provides a unique cultural and academic environment. Located at the intersection of history and modern development, our students benefit from a multi-disciplinary approach to learning.',
    'about.button': 'EXPLORE DEPARTMENTS',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
