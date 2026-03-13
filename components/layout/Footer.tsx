import Link from "next/link";
import { footerLinks } from "@/data/navigation";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold font-serif">FEROZSONS</span>
              <br />
              <span className="text-[10px] tracking-[0.2em] uppercase opacity-70">Laboratories Limited</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Committed to improving the quality of life through innovative healthcare solutions since 1956.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Ferozsons Laboratories Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
