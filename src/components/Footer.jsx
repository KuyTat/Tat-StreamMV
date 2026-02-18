import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1HzfmNJpJQ/?mibextid=wwXIfr",
      icon: FaFacebookF,
    },
    {
      name: "Tiktok",
      url: "https://www.tiktok.com/@taaat_1.0?_t=ZS-90Nn33OqB0R&_r=1",
      icon: FaTiktok,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kuytat64?igsh=MWtzM2ZlcGkzNjlwOA%3D%3D&utm_source=qr",
      icon: FaInstagram,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UC4udMwFhNmQG6ZWwroKTC3Q",
      icon: FaYoutube,
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              Tat-StreamMV
            </Link>

            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Your ultimate destination for movies. Stream thousands of titles,
              discover new releases, and explore cinema from around the world.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {socials.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Browse */}
          <div>
            <h4 className="font-semibold text-white mb-6">Browse</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/movie" className="hover:text-white">
                  All Movies
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  New Releases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Top Rated
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Coming Soon
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Tat-StreamMV. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
