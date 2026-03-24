import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import International from './pages/International';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/international" element={<International />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
