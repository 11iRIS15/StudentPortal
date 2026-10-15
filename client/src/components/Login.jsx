import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  GraduationCap,
} from "lucide-react";

const demoStudents = [
  { label: "Angelica I. De La Torre - BSIT", id: "2024-12345" },
  { label: "Demo Student - BSIT", id: "2024-00001" },
];

export default function Login({ onLogin }) {
  const [studentId, setStudentId] = useState("2024-12345");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");

  function submitLogin(event) {
    event.preventDefault();

    if (!studentId.trim() || !password.trim()) {
      setError("Please enter your Student ID and password.");
      return;
    }

    setError("");
    onLogin(studentId.trim());
  }

  return (
    <div className="login-screen">
      <section className="login-showcase">
        <div className="showcase-brand">
          <img src="/images/idsc-logo.jpg" alt="IDSC official logo" />
          <div>
            <h2>IDSC</h2>
            <span>STUDENT PORTAL</span>
          </div>
        </div>

        <div className="showcase-copy">
          <span className="eyebrow light">WELCOME TO YOUR CAMPUS HUB</span>
          <h1>
            Student life,
            <br />
            all in one place.
          </h1>
          <p>
            One simple gateway to your classes, records,
            <br className="desktop-break" />
            payments, wellness and learning resources.
          </p>
        </div>

        <div className="showcase-watermark">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <img src="/images/idsc-logo.jpg" alt="" />
        </div>

        <p className="showcase-footer">
          INFOTECH DEVELOPMENT SYSTEMS COLLEGES · LIGAO CITY
        </p>
      </section>

      <section className="login-form-side">
        <div className="login-form-container">
          <span className="eyebrow">STUDENT ACCESS</span>
          <h1>Welcome back.</h1>
          <p className="login-description">
            Log in to pick up right where you left off.
          </p>

          <form onSubmit={submitLogin}>
            <label htmlFor="studentId">Student ID</label>
            <input
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter your Student ID"
              autoComplete="username"
            />

            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="password-toggle"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={21} /> : <Eye size={21} />}
              </button>
            </div>

            <div className="login-options">
              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="text-button"
                onClick={() =>
                  setError("Please contact your school administrator to reset your password.")
                }
              >
                Forgot password?
              </button>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="login-submit">
              <span>Log in to portal</span>
              <ArrowRight size={21} />
            </button>
          </form>

          <div className="prototype-divider">
            <span />
            <small>PROTOTYPE ACCESS</small>
            <span />
          </div>

          <p className="prototype-description">
            Explore as a demo student. Any non-empty password works.
          </p>

          <div className="demo-select-wrap">
            <GraduationCap size={19} />
            <select
              aria-label="Choose a demo student"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            >
              {demoStudents.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.label}
                </option>
              ))}
            </select>
          </div>

          <p className="security-note">
            Demo only · Not connected to real student accounts
          </p>
        </div>
      </section>
    </div>
  );
}