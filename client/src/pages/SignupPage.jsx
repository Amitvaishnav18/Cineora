import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUp } from '../Services/api/authApi';
import {
  TicketPercent,
  CreditCard,
  Crown,
  UserRound,
  Eye,
  EyeOff,
  LoaderCircle,
} from 'lucide-react';

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");



const handleSignup = async () => {
  setError("");

  if (!name.trim() || !email.trim() || !password || !confirmPassword) {
    setError("Please fill in all fields.");
    return;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  setLoading(true);

  try {
    const response = await signUp({
      name: name.trim(),
      email: email.trim(),
      password,
    });

    console.log("Signup successful:", response.data);
    navigate("/login");
  } catch (error) {
    setError(
      error.response?.data?.message ||
      "Signup failed. Please try again."
    );
  } finally {
    setLoading(false);
  }
};


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

      {/* Right Section: Signup Form */}
      <section className="mx-auto w-full `max-w-[440px]`">
        <div className="rounded-2xl border border-border-subtle bg-bg-white p-5 shadow-[0_8px_30px_rgba(35,18,104,0.10)] lg:p-6">

          <div className="mb-5">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-bg-lavender text-text-purple">
  <UserRound size={24} strokeWidth={1.8} />
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
              value={name}
onChange={(e) => setName(e.target.value)}
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
              value={email}
onChange={(e) => setEmail(e.target.value)}
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
              value={password}
onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm your password"
                className="h-10 w-full rounded-lg border border-border-slate bg-bg-white px-3 text-14 text-text-dark outline-none placeholder:text-text-gray focus:border-text-purple focus:ring-2 focus:ring-text-purple/15"
              />
            </div>
{error && (
  <p role="alert" className="text-sm text-red-600">
    {error}
  </p>
)}
           
           
<button
  type="button"
  onClick={handleSignup}
  disabled={loading}
  className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-text-purple text-16 font-semibold text-text-white shadow-md shadow-text-purple/20 transition-colors hover:bg-text-deep-purple disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? (
    <>
      <LoaderCircle size={20} className="animate-spin" />
      <span>Creating account...</span>
    </>
  ) : (
    "Register"
  )}
</button>

          </div>

          <p className="mt-4 text-center text-14 text-text-charcoal">
            Already have an account?{' '}
            <NavLink
              to ="/login"
              className="font-semibold text-text-purple hover:underline"
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