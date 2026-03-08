import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

function CoinbaseLogo() {
  return (
    <div className="flex justify-center mb-6">
      <div className="w-12 h-12 rounded-full bg-cb-blue flex items-center justify-center shadow-lg">
        <div className="w-6 h-6 rounded-full bg-white" />
      </div>
    </div>
  );
}

function Divider({ text }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <hr className="flex-1 border-cb-border" />
      <span className="text-xs text-cb-muted font-medium">{text}</span>
      <hr className="flex-1 border-cb-border" />
    </div>
  );
}

function SocialButton({ icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-3 w-full border border-cb-border
                 rounded-xl py-3 text-sm font-medium text-cb-dark
                 hover:bg-cb-surface transition-colors"
    >
      {icon}
      {label}
    </button>
  );
}

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // 1 = email, 2 = password

  function handleEmailNext(e) {
    e.preventDefault();
    if (!email.trim()) { setError("Please enter your email."); return; }
    setError("");
    setStep(2);
  }

  function handleSignIn(e) {
    e.preventDefault();
    if (!password) { setError("Please enter your password."); return; }
    // Mock sign-in: just redirect to home
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-cb-surface flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <CoinbaseLogo />

        <h1 className="text-2xl font-bold text-cb-dark text-center mb-1">
          Sign in to Coinbase
        </h1>
        <p className="text-cb-gray text-sm text-center mb-8">
          {step === 1 ? "Enter your email to continue." : `Welcome back 👋`}
        </p>

        {/* Social sign-in */}
        {step === 1 && (
          <>
            <SocialButton
              icon={
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.16 1.26-2.14 3.76.03 2.99 2.62 3.99 2.65 4-.03.07-.41 1.4-1.36 2.77M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              }
              label="Continue with Apple"
            />
            <div className="mt-3">
              <SocialButton
                icon={
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                }
                label="Continue with Google"
              />
            </div>

            <Divider text="or" />
          </>
        )}

        {/* Form */}
        <form onSubmit={step === 1 ? handleEmailNext : handleSignIn} className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            error={step === 1 ? error : ""}
            required
            autoComplete="email"
            disabled={step === 2}
          />

          {step === 2 && (
            <Input
              label="Password"
              type={showPw ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              error={error}
              required
              autoComplete="current-password"
              rightIcon={
                <button type="button" onClick={() => setShowPw(!showPw)} className="text-cb-gray hover:text-cb-dark">
                  {showPw ? <EyeSlashIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                </button>
              }
            />
          )}

          {step === 2 && (
            <div className="flex justify-end">
              <a href="#" className="text-xs text-cb-blue font-medium hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <Button type="submit" variant="primary" size="lg" fullWidth>
            {step === 1 ? "Continue" : "Sign in"}
          </Button>

          {step === 2 && (
            <button
              type="button"
              onClick={() => { setStep(1); setPassword(""); setError(""); }}
              className="text-sm text-cb-blue hover:underline text-center"
            >
              ← Use a different email
            </button>
          )}
        </form>

        <p className="text-center text-sm text-cb-gray mt-6">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-cb-blue font-semibold hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
