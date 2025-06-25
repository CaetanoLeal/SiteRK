import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold text-white">
              RK <span className="text-accent">Marketing Digital</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-accent transition-colors">
              Home
            </a>
            <a href="#servicos" className="text-white hover:text-accent transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-white hover:text-accent transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-white hover:text-accent transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

