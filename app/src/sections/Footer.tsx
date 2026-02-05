import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 px-6 lg:px-8 border-t border-[#00f0ff]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block text-2xl font-bold gradient-text mb-2"
            >
              RC
            </a>
            <p className="text-sm text-[#606070]">
              © {currentYear} Ram Chandra. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    if (link.href === '#') {
                      scrollToTop();
                    } else {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }
                }}
                className="text-sm text-[#a0a0b0] hover:text-[#00f0ff] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-[#12121a] border border-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Built With */}
        <div className="mt-8 pt-8 border-t border-[#00f0ff]/5 text-center">
          <p className="text-xs text-[#606070] flex items-center justify-center gap-1">
            Built with <Heart className="w-3 h-3 text-[#ff00a0]" /> using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
