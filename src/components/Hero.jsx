import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Discover Your Real Market Value Instantly
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            AI-powered salary insights for Indian professionals. Benchmark your pay against the market and plan your next career move with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#salary-checker"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors"
            >
              Check My Salary Now
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-800 font-medium hover:bg-slate-50"
            >
              Watch Demo
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600" />
              Real-time insights
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600" />
              India-focused data
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] w-full">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-200 bg-white/60 backdrop-blur">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
