
import { NavLink } from 'react-router-dom';
import { Search, Menu, MapPin } from 'lucide-react';
import LocationModal from './LocationModal';
import useCity from '../hooks/useCity';
import { useState } from 'react';

function Navbar() {
  const { cityData, loading, error, selectCity } = useCity();
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
      isActive
        ? 'bg-[#EAE3FF] text-[#6842F5]'
        : 'text-text-charcoal hover:bg-[#F5F1FF] hover:text-[#6842F5]'
    }`;

  return (
    <nav className="w-full border-b border-border-subtle bg-bg-white">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between gap-3 px-4 sm:gap-6 sm:px-8 lg:px-12">

      
        <div className="flex min-w-0 shrink-0 items-center gap-3 sm:gap-5 lg:gap-6">
          <NavLink to="/" className="flex shrink-0 items-center">
            <img
              src="/cineora-logo.svg"
              alt="Cineora"
              className="h-8 w-auto sm:h-10"
            />
          </NavLink>

          
          <div className="h-10 w-px shrink-0 bg-border-muted" />

          {/* Location */}
          <div
  className="flex min-w-0 cursor-pointer items-center gap-2 sm:gap-3"
  onClick={() => setIsLocationOpen(true)}
>
            <MapPin className="h-5 w-5 shrink-0 text-[#6842F5] sm:h-7 sm:w-7" />

            <div className="flex min-w-0 flex-col leading-tight">
              <span className="max-w-[100px] truncate text-sm font-semibold text-text-dark sm:max-w-none sm:text-base">
                {loading
                  ? 'Getting location...'
                  : error || cityData.city || 'City unavailable'}
              </span>

              <span className="max-w-[100px] truncate text-xs font-medium text-text-charcoal sm:max-w-none sm:text-sm">
                {[cityData.state_district, cityData.state]
                  .filter(Boolean)
                  .join(', ')}
              </span>
            </div>
          </div>
        </div>

        
        <div className="hidden shrink-0 items-center gap-1 lg:gap-2 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            For you
          </NavLink>

          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>
        </div>

        
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-xl border border-border-muted bg-bg-white px-3 py-2.5 lg:flex">
            <Search className="h-4 w-4 text-text-gray" />

            <input
              type="text"
              placeholder="Search movies..."
              className="w-36 bg-transparent text-14 font-regular text-text-dark outline-none placeholder:text-text-grey"
            />
          </div>

          <NavLink
            to="/login"
            className="hidden rounded-xl border border-border-muted px-3 py-2.5 text-14 font-medium text-text-charcoal transition-colors hover:border-text-purple hover:text-text-purple sm:block"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="rounded-xl bg-text-purple px-3 py-2.5 text-sm font-semibold text-text-white transition-colors hover:bg-text-deep-purple sm:px-4 sm:text-14"
          >
            Sign Up
          </NavLink>

          <button
            type="button"
            aria-label="Open menu"
            className="rounded-lg p-2 text-text-charcoal transition-colors hover:bg-bg-lavender md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      <LocationModal
  isOpen={isLocationOpen}
  onClose={() => setIsLocationOpen(false)}
  onSelectCity={(city) => {
  selectCity(city);
}}
/>
    </nav>
  );
}

export default Navbar;
