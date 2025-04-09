import "../index.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import SearchBar from "./searchbar";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 mt-0 py-5 bg-[var(--color--secondary)] text-primary lg:px-20 px-10 ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl lg:text-2xl font-bold cursor-pointer">
          <Link to="/">DkLaw Associates</Link>
        </div>

        {/* Desktop Menu */}

            <ul className=" list-none hidden md:flex items-center space-x-4 text-lg ">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/lawyers">Lawyers</Link>
            </li>
            <li>
            <Link to="/services">Services</Link>
            </li>
          <SearchBar variant="nav" size="md" className="" />
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <ul className=" list-none md:hidden flex flex-col mt-4 space-y-2">
          <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/lawyers">Lawyers</Link>
            </li>
            <li>
            <Link to="/services">Services</Link>
            </li>
            <SearchBar variant="nav" size="md" className="" />
          </ul>
          
      )}
  </nav>
  );
};

export default Navbar;