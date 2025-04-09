import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-secondary py-8 lg:px-20 px-10 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-[var(--accent-color)]">Dk Law Associates</h2>
          <p className="mt-2 text-sm">Dedicated to providing expert legal solutions with integrity.</p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center"><FiMapPin className="mr-2" /> Kathmandu, Nepal</p>
            <p className="flex items-center"><FiPhone className="mr-2" /> +977 9809999992</p>
            <p className="flex items-center"><FiMail className="mr-2" /> contact@dklawassociates.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-[var(--accent-color)]">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="">Home</a></li>
            <li><a href="#" className="">About Us</a></li>
            <li><a href="#" className="">Practice Areas</a></li>
            <li><a href="#" className="">Our Team</a></li>
            <li><a href="#" className="">Blog</a></li>
            <li><a href="#" className="">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal Policies */}
        <div>
          <h2 className="text-xl font-bold text-[var(--accent-color)]">Legal</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="">Privacy Policy</a></li>
            <li><a href="#" className="">Terms & Conditions</a></li>
            <li><a href="#" className="">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-[var(--border-color)] pt-4">
        <p className="text-sm text-[var(--accent-color)]">&copy; {new Date().getFullYear()} Dk law Associates. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;