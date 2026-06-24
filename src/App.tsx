import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import { ThemeProvider } from './context/ThemeContext';

function MainApp() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage />;
      case 'education':
        return <EducationPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between transition-colors duration-300">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-grow pt-28 pb-12 px-4">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;





