import logo from "@/assets/apollox-logo.png";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="security" className="py-16 border-t border-border" style={{ backgroundColor: '#BCBBBC' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="ApolloX Technologies" className="h-12 w-auto mb-6 mix-blend-darken" />
            <p className="text-sm text-muted-foreground mb-6">
              Licensed digital FX infrastructure for MENA
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#personal" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  Personal Wallet
                </a>
              </li>
              <li>
                <a href="#business" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  Business API
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              © 2025 ApolloX Technologies Ltd.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-3 h-3" />
              <a href="mailto:feriel@apolloxtech.com">
                feriel@apolloxtech.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
