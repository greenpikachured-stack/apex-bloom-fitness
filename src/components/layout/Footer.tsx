import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-gradient mb-4">APEX</h3>
            <p className="text-muted-foreground mb-6">
              Empowering women through fitness. Transform your body, elevate your mind, and embrace your strength.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Programs", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {["Strength Training", "HIIT Classes", "Yoga & Wellness", "Personal Training"].map((item) => (
                <li key={item}>
                  <Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/zNQDoyeKGg6wVGMJ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  HVR, Rd Number 1, Happy Homes Colony, Golden Heights Colony, RAJENDERNAGAR, Hyderabad, Telangana 500048
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>apexfithyd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Apex Fitness. All rights reserved.</p>
          <p>Designed By Unique Reach Media</p>
        </div>
      </div>
    </footer>
  );
};
