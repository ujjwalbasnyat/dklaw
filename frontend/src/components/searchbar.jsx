import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ variant = 'default', size = 'md', className = '' }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  const handleClear = () => {
    setQuery('');
  };

  const isMobile = window.innerWidth < 480;

  // Base classes for the search bar
  const baseClasses = 'flex items-center w-full';

  // Variant-specific classes for layout
  const variantClasses = {
    default: 'max-w-md mx-auto mt-8 px-4 sm:px-0 sm:w-3/4 md:w-1/2',
    nav: 'w-full sm:w-auto',
    footer: 'w-full max-w-lg mx-auto',
  };

  // Size-specific classes for input and button
  const sizeClasses = {
    sm: {
      input: 'py-1 px-2 pr-6 text-xs sm:text-sm',
      button: 'py-1 px-2  ',
      icon: 'h-3 w-3 sm:h-4 sm:w-4',
    },
    md: {
      input: 'py-2 px-4 pr-10  text-sm',
      button: 'py-2 px-4 min-w-[44px] sm:min-w-0',
      icon: 'h-4 w-4 sm:h-5 sm:w-5',
    },
  };

  // Full-screen overlay for mobile when focused
  const mobileOverlayClasses = isFocused && isMobile
    ? 'fixed inset-0 z-50 bg-white flex-col justify-center px-4'
    : variantClasses[variant];

  return (
    <form
      onSubmit={handleSearch}
      className={`${baseClasses} ${mobileOverlayClasses} ${className}`}
    >
      <div
        className={`flex gap-2 items-center w-full ${
          isFocused && isMobile ? 'max-w-md' : ''
        }`}
      >
        <input
          type="search"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={` text-primary border-1 border-primary w-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors ${sizeClasses[size].input}`}
          aria-label="Search input"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className={`absolute text-primary hover:text-secondary ${
              size === 'sm' ? 'right-4 sm:right-8' : 'right-10 sm:right-12'
            }`}
            aria-label="Clear search"
          >
            <FaTimes className={sizeClasses[size].icon} />
          </button>
        )}
        <button
          type="submit"
          className={` bg-accent-primary text-secondary  hover:bg-accent-secondary  cursor-pointer focus:outline-none focus:ring-2  transition-colors flex items-center ${sizeClasses[size].button}`}
          aria-label="Search"
        >
          <FaSearch className={sizeClasses[size].icon} />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
      {isFocused && isMobile && (
        <button
          type="button"
          onClick={() => setIsFocused(false)}
          className=" text-primary hover:text-secondary"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default SearchBar;