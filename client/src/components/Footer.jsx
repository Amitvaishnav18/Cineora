import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';

import { FiMail, FiArrowUpRight } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-dark">
      <div className="mx-auto `max-w-[1500px]` px-5 py-12 sm:px-8 lg:px-12">


        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          
          <div>
            <NavLink to="/" className="inline-flex items-center">
              <img
                src="/cineora-logo.svg"
                alt="Cineora"
                className="h-10 w-auto"
              />
            </NavLink>

            <p className="mt-4 max-w-xs text-14 leading-6 text-text-darkgray">
              Your next favorite movie is just a click away.
              Discover movies and shows worth watching.
            </p>

            
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-xl border border-border-subtle p-2.5 text-text-white transition-colors hover:border-text-purple hover:bg-bg-lavender hover:text-text-purple"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="rounded-xl border border-border-subtle p-2.5 text-text-white transition-colors hover:border-text-purple hover:bg-bg-lavender hover:text-text-purple"
              >
                <FaYoutube className="h-4 w-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-xl border border-border-subtle p-2.5 text-text-white transition-colors hover:border-text-purple hover:bg-bg-lavender hover:text-text-purple"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="rounded-xl border border-border-subtle p-2.5 text-text-white transition-colors hover:border-text-purple hover:bg-bg-lavender hover:text-text-purple"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-16 font-semibold text-text-lightgray">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-14 text-text-muted transition-colors hover:text-text-purple"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movies"
                  className="text-14 text-text-muted transition-colors hover:text-text-purple"
                >
                  Movies
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shows"
                  className="text-14 text-text-muted transition-colors hover:text-text-purple"
                >
                  TV Shows
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/my-list"
                  className="text-14 text-text-muted transition-colors hover:text-text-purple"
                >
                  My List
                </NavLink>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-16 font-semibold text-text-lightgray">
              Support
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <NavLink
                  to="/help"
                  className="text-14 text-text-muted transition-colors hover:text-text-purple"
                >
                  Help Center
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="text-14 text-text-muted transition-colors hover:text-text-purple"
                >
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/privacy"
                  className="text-14 text-text-muted transition-colors hover:text-text-purple"
                >
                  Privacy Policy
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/terms"
                  className="text-14 text-text-muted transition-colors hover:text-text-purple"
                >
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-16 font-semibold text-text-lightgray">
              Stay Connected
            </h3>

            <p className="mt-4 text-14 leading-6 text-text-darkgray">
              Have questions or suggestions? We would love to hear from you.
            </p>

            <a
              href="mailto:support@cineora.com"
              className="mt-4 inline-flex items-center gap-2 text-14 font-medium text-text-purple transition-colors hover:text-text-deep-purple"
            >
              <FiMail className="h-4 w-4 shrink-0" />
              <span>support@cineora.com</span>
              <FiArrowUpRight className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>

        
        <div className="mt-10 flex flex-col gap-3 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-12 text-text-darkgray">
            © {new Date().getFullYear()} Cineora. All rights reserved.
          </p>

          <p className="text-12 text-text-darkgray">
            Made for movie lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;