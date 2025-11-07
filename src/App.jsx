import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <div id="career-growth" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold">Plan Your Career Growth</h2>
                <p className="mt-4 text-slate-600 max-w-xl">
                  Explore role-based roadmaps with milestones, skills, and compensation bands. Make your next move strategically with data-backed guidance.
                </p>
                <div className="mt-6">
                  <a href="#courses" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700">Explore Roadmaps</a>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 bg-white">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3"><span className="h-2 w-2 mt-2 rounded-full bg-blue-600" /> Senior Software Engineer → Tech Lead</li>
                  <li className="flex items-start gap-3"><span className="h-2 w-2 mt-2 rounded-full bg-blue-600" /> Data Analyst → Data Scientist</li>
                  <li className="flex items-start gap-3"><span className="h-2 w-2 mt-2 rounded-full bg-blue-600" /> Product Designer → Design Lead</li>
                  <li className="flex items-start gap-3"><span className="h-2 w-2 mt-2 rounded-full bg-blue-600" /> DevOps Engineer → SRE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Features />
        <section id="courses" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold">Courses & Skill Paths</h2>
              <p className="mt-4 text-slate-600">Curated programs to increase your market value with the most in-demand skills.</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {['Full-Stack Web', 'Data Science', 'Cloud & DevOps'].map((c) => (
                <div key={c} className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold">{c}</h3>
                  <p className="mt-2 text-sm text-slate-600">Guided pathway with projects, mock interviews, and salary benchmarks.</p>
                  <a href="#" className="mt-4 inline-block text-blue-700 font-medium">View path →</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
