import { Brain, TrendingUp, GraduationCap, Scale } from 'lucide-react';

const features = [
  {
    title: 'AI Salary Analyzer',
    desc: 'Get personalized salary reports tailored to your role, experience, and location.',
    icon: Brain,
  },
  {
    title: 'Career Roadmaps',
    desc: 'Step-by-step growth plans to reach your next title faster.',
    icon: TrendingUp,
  },
  {
    title: 'Skill Recommendations',
    desc: 'AI-curated learning paths to boost your market value.',
    icon: GraduationCap,
  },
  {
    title: 'Job Comparison Tool',
    desc: 'Compare offers smartly across CTC, benefits, and growth trajectory.',
    icon: Scale,
  },
];

export default function Features() {
  return (
    <section id="salary-checker" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Built For Indian Professionals</h2>
          <p className="mt-4 text-slate-600">Actionable insights to negotiate better, plan growth, and learn the right skills.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-xl hover:shadow-slate-300/20 transition-all">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-blue-700 group-hover:text-blue-800">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
