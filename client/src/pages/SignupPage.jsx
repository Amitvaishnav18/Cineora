import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  TicketPercent,
  CreditCard,
  Crown,
  UserRound,
  Eye,
  EyeOff,
} from 'lucide-react';

function SignupPage() {
  return (
    <div className="h-dvh overflow-hidden bg-bg-lavender p-3 sm:p-5">
      <div className="mx-auto flex h-full `max-w-[1500px]` flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-white">

        <header className="flex h-14 shrink-0 items-center justify-between border-b border-border-subtle px-5 sm:px-8">
          <img
            src="/cineora-logo.svg"
            alt="Cineora"
            className="h-9 w-auto object-contain"
          />

          <NavLink
            to="/help"
            className="text-14 font-medium text-text-charcoal hover:text-text-purple"
          >
            Help
          </NavLink>
        </header>


        <main className="grid min-h-0 flex-1 grid-cols-2 items-center gap-6 overflow-hidden px-6 py-3 lg:gap-12 lg:px-12">


          <section className="mx-auto w-full `max-w-[500px]`">
            <h1 className="text-28 font-semibold text-text-dark">
              Cineora Signup
            </h1>

            <p className="mt-1 text-16 text-text-charcoal">
              Join the Cineora community
            </p>


            <div className="mt-4 flex items-center gap-4 rounded-xl border border-text-purple/30 bg-bg-lavender/60 p-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-bg-white text-text-purple">
                <TicketPercent size={28} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-12 font-semibold tracking-wide text-text-purple">
                  CINEORA EXCLUSIVE
                </p>
                <h2 className="mt-1 text-18 font-semibold text-text-dark">
                  Get 20% OFF on First Booking
                </h2>
                <p className="mt-1 text-13 leading-5 text-text-charcoal">
                  Enjoy a special discount on your very first movie ticket booking. New users only!
                </p>
              </div>
            </div>


            <div className="mt-3 flex items-center gap-4 rounded-xl border border-border-muted bg-bg-white p-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-bg-lavender text-text-purple">
                <CreditCard size={28} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="text-18 font-semibold text-text-dark">
                  FLAT CASHBACK
                </h2>
                <p className="text-14 font-medium text-text-charcoal">
                  on Bank Cards
                </p>
                <p className="mt-1 text-13 leading-5 text-text-charcoal">
                  Save extra on leading credit and debit cards from major banks.
                </p>
              </div>
            </div>

            
            <div className="mt-3 flex items-center gap-4 rounded-xl border border-text-purple/30 bg-bg-lavender/60 p-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-bg-white text-text-purple">
                <Crown size={28} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-12 font-semibold tracking-wide text-text-purple">
                  CINEORA CLUB REWARDS
                </p>
                <h2 className="mt-1 text-18 font-semibold text-text-dark">
                  Rewards Await!
                </h2>
                <p className="mt-1 text-13 leading-5 text-text-charcoal">
                  Earn points on every booking, exclusive access, and early bird bookings.
                </p>
              </div>
            </div>
          </section>


          <section className="mx-auto w-full `max-w-[440px]`">
            <div className="rounded-2xl border border-border-subtle bg-bg-white p-5 shadow-[0_8px_30px_rgba(35,18,104,0.10)] lg:p-6">

              <div className="mb-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-bg-lavender text-text-purple">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
                  </svg>
                </div>

                <h2 className="text-24 font-semibold text-text-dark">
                  Create your account
                </h2>

                <p className="mt-1 text-14 text-text-charcoal">
                  Join Cineora and make every movie special.
                </p>
              </div>

              <div className="space-y-3">

              
                <div>
                  <label className="mb-1.5 block text-14 font-medium text-text-charcoal">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-10 w-full rounded-lg border border-border-slate bg-bg-white px-3 text-14 text-text-dark outline-none placeholder:text-text-gray focus:border-text-purple focus:ring-2 focus:ring-text-purple/15"
                  />
                </div>

                
                <div>
                  <label className="mb-1.5 block text-14 font-medium text-text-charcoal">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-10 w-full rounded-lg border border-border-slate bg-bg-white px-3 text-14 text-text-dark outline-none placeholder:text-text-gray focus:border-text-purple focus:ring-2 focus:ring-text-purple/15"
                  />
                </div>

                
                <div>
                  <label className="mb-1.5 block text-14 font-medium text-text-charcoal">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="h-10 w-full rounded-lg border border-border-slate bg-bg-white px-3 text-14 text-text-dark outline-none placeholder:text-text-gray focus:border-text-purple focus:ring-2 focus:ring-text-purple/15"
                  />
                </div>

                
                <div>
                  <label className="mb-1.5 block text-14 font-medium text-text-charcoal">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="h-10 w-full rounded-lg border border-border-slate bg-bg-white px-3 text-14 text-text-dark outline-none placeholder:text-text-gray focus:border-text-purple focus:ring-2 focus:ring-text-purple/15"
                  />
                </div>

                
                <button
                  type="button"
                  className="mt-2 h-11 w-full rounded-lg bg-text-purple text-16 font-semibold text-text-white shadow-md shadow-text-purple/20 transition-colors hover:bg-text-deep-purple"
                >
                  Register
                </button>
              </div>

              <p className="mt-4 text-center text-14 text-text-charcoal">
                Already have an account?{' '}
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `font-semibold transition-colors ${isActive
                      ? 'text-text-deep-purple'
                      : 'text-text-purple hover:underline'
                    }`
                  }
                >
                  Login
                </NavLink>
              </p>
            </div>
          </section>

        </main>
      </div>
    </div>


  );
}

export default SignupPage;
