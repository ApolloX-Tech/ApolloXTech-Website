import { Button } from "@/components/ui/button";
import logo from "@/assets/apollox-logo.png";

const Header = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#BCBBBC]/95 backdrop-blur-lg border-b border-border transition-all duration-300">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 opacity-0 animate-fade-in-down">
          <img src={logo} alt="ApolloX Technologies" className="h-12 w-auto mix-blend-darken" />
        </div>
        
        <div className="hidden md:flex items-center gap-12 opacity-0 animate-fade-in-down [animation-delay:100ms]">
          <a 
            href="#personal" 
            onClick={(e) => handleNavClick(e, '#personal')}
            className="text-sm uppercase tracking-wider font-medium text-foreground hover:text-muted-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            Personal
          </a>
          <a 
            href="#business"
            onClick={(e) => handleNavClick(e, '#business')}
            className="text-sm uppercase tracking-wider font-medium text-foreground hover:text-muted-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            Business
          </a>
          <a 
            href="#features"
            onClick={(e) => handleNavClick(e, '#features')}
            className="text-sm uppercase tracking-wider font-medium text-foreground hover:text-muted-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            Features
          </a>
          <a 
            href="#security"
            onClick={(e) => handleNavClick(e, '#security')}
            className="text-sm uppercase tracking-wider font-medium text-foreground hover:text-muted-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            Security
          </a>
        </div>

        <div className="flex items-center gap-4 opacity-0 animate-fade-in-down [animation-delay:200ms]">
          <Button variant="outline" size="sm" className="uppercase tracking-wider text-xs hover:scale-105 transition-all duration-300">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
