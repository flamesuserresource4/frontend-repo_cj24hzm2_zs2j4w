import Hero from './components/Hero';
import Experience from './components/Experience';
import AchievementsSkills from './components/AchievementsSkills';
import InfoSections from './components/InfoSections';

function App() {
  return (
    <div className="h-screen w-full overflow-y-auto scroll-smooth snap-y snap-mandatory bg-black">
      <div className="snap-start"><Hero /></div>
      <div className="snap-start"><Experience /></div>
      <div className="snap-start"><AchievementsSkills /></div>
      <div className="snap-start"><InfoSections /></div>
      <footer className="w-full bg-black text-white border-t border-white/10 py-6 text-center text-xs">
        © {new Date().getFullYear()} Kalvin Marpaho Valentino — Built with love, security, and performance in mind.
      </footer>
    </div>
  );
}

export default App;
