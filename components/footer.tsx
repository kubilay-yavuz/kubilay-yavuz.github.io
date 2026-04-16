export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 relative overflow-hidden glass-navbar border-x-0 border-b-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-heading text-lg font-bold">
              <span className="text-amber-400">Kubilay</span>
              <span className="text-white">Yavuz</span>
            </p>
            <p className="font-body text-xs text-slate-500 mt-0.5">Senior Data Scientist · AI Systems Builder</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500 font-body text-sm">
              © {currentYear} Kubilay Yavuz. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-4 mt-2">
              <a
                href="https://github.com/kubilay-yavuz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-amber-400 transition-colors font-body text-xs"
              >
                GitHub
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://linkedin.com/in/f-kubilay-yavuz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-amber-400 transition-colors font-body text-xs"
              >
                LinkedIn
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="mailto:f.kubilay.yavuz@gmail.com"
                className="text-slate-500 hover:text-amber-400 transition-colors font-body text-xs"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="accent-line mx-0 w-full h-px opacity-30" style={{ background: "linear-gradient(90deg, transparent, rgba(251,191,36,0.3), rgba(249,115,22,0.3), transparent)" }} />
        </div>
      </div>
    </footer>
  )
}
