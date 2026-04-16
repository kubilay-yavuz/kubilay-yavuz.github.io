export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-primary">
              Kubilay<span className="text-accent">Yavuz</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © {currentYear} Kubilay Yavuz. All rights reserved.
              <a
                href="https://github.com/kubilay-yavuz"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
