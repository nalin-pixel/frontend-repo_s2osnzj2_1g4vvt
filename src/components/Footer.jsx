export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">SS</div>
              <div className="leading-tight">
                <p className="font-semibold text-slate-900">SmartSalary</p>
                <p className="text-xs text-slate-500 -mt-0.5">Know Your True Market Worth</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 max-w-sm">
              Empowering Indian professionals with transparent, AI-driven compensation insights and growth tools.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
              <li><a href="#privacy" className="hover:text-blue-700">Privacy Policy</a></li>
              <li><a href="#blog" className="hover:text-blue-700">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#salary-checker" className="hover:text-blue-700">Salary Checker</a></li>
              <li><a href="#career-growth" className="hover:text-blue-700">Career Growth</a></li>
              <li><a href="#courses" className="hover:text-blue-700">Courses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Follow</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-700">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700">LinkedIn</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-blue-700">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} SmartSalary.com. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
