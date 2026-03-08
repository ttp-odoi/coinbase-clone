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

function PasswordStrength({ password }) {
  const getStrength = (pw) => {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };

  const score = getStrength(password);
  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = ["", "bg-cb-red", "bg-yellow-400", "bg-blue-400", "bg-cb-green"];

  if (!password) return null;

  return (
    <div className="mt-1">
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors
              ${i <= score ? colors[score] : "bg-gray-200"}`}
          />
        ))}
      </div>
      <p className={`text-xs font-medium ${score <= 1 ? "text-cb-red" : score === 2 ? "text-yellow-600" : score === 3 ? "text-blue-500" : "text-cb-green"}`}>
        {labels[score]}
      </p>
    </div>
  );
}

function SocialButton({ icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-3 w-full border border-cb-border
                 rounded-xl py-3 text-sm font-medium text-cb-dark hover:bg-cb-surface transition-colors"
    >
      {icon}
      {label}
    </button>
  );
}

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  function update(field) {
    return (e) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((err) => ({ ...err, [field]: "" }));
    };
  }

  function validate() {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.lastName.trim()) errs.lastName = "Last name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email.";
    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 8) errs.password = "Password must be at least 8 characters.";
    if (!agree) errs.agree = "You must agree to the terms.";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // Mock success → redirect home
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-cb-surface flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <CoinbaseLogo />

        <h1 className="text-2xl font-bold text-cb-dark text-center mb-1">
          Create your account
        </h1>
        <p className="text-cb-gray text-sm text-center mb-8">
          Join millions of people using Coinbase.
        </p>

        {/* Social sign-up */}
        <SocialButton
          icon={
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.16 1.26-2.14 3.76.03 2.99 2.62 3.99 2.65 4-.03.07-.41 1.4-1.36 2.77M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          }
          label="Continue with Apple"
        />
        <div className="mt-3 mb-1">
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

        <div className="flex items-center gap-3 my-5">
          <hr className="flex-1 border-cb-border" />
          <span className="text-xs text-cb-muted font-medium">or</span>
          <hr className="flex-1 border-cb-border" />
        </div>

        {/* Registration form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="First name"
              placeholder="Jane"
              value={form.firstName}
              onChange={update("firstName")}
              error={errors.firstName}
              required
              autoComplete="given-name"
            />
            <Input
              label="Last name"
              placeholder="Doe"
              value={form.lastName}
              onChange={update("lastName")}
              error={errors.lastName}
              required
              autoComplete="family-name"
            />
          </div>

          <Input
            label="Email"
            type="email"
            placeholder="name@email.com"
            value={form.email}
            onChange={update("email")}
            error={errors.email}
            required
            autoComplete="email"
          />

          <div>
            <Input
              label="Password"
              type={showPw ? "text" : "password"}
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={update("password")}
              error={errors.password}
              required
              autoComplete="new-password"
              rightIcon={
                <button type="button" onClick={() => setShowPw(!showPw)} className="text-cb-gray hover:text-cb-dark">
                  {showPw ? <EyeSlashIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                </button>
              }
            />
            <PasswordStrength password={form.password} />
          </div>

          {/* Terms checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => { setAgree(e.target.checked); setErrors((err) => ({ ...err, agree: "" })); }}
                className="mt-0.5 accent-cb-blue w-4 h-4 shrink-0"
              />
              <span className="text-xs text-cb-gray leading-relaxed">
                I agree to Coinbase&apos;s{" "}
                <a href="#" className="text-cb-blue hover:underline">User Agreement</a>{" "}
                and{" "}
                <a href="#" className="text-cb-blue hover:underline">Privacy Policy</a>.
              </span>
            </label>
            {errors.agree && (
              <p className="text-xs text-cb-red mt-1">{errors.agree}</p>
            )}
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth>
            Create account
          </Button>
        </form>

        <p className="text-center text-sm text-cb-gray mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-cb-blue font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
