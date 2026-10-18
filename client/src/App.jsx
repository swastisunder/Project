import { useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const isSignup = mode === 'signup'

  function changeMode(nextMode) {
    setMode(nextMode)
    setMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(
      'Your form is ready. Connect an authentication service to continue.',
    )
  }

  return (
    <main className="auth-layout">
      <section className="welcome-panel" aria-label="Welcome">
        <a className="brand" href="/" aria-label="Forma home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          forma
        </a>

        <div className="welcome-copy">
          <p className="eyebrow">A little more room to grow</p>
          <h1>
            Make space
            <br />
            for your
            <br />
            <span>next big thing.</span>
          </h1>
          <p className="welcome-description">
            A calmer way to bring your plans, projects, and people together.
          </p>
        </div>

        <div className="visual-card" aria-hidden="true">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-sun" />
          <div className="visual-caption">
            <span className="caption-dot" />
            <span>Good things are taking shape</span>
          </div>
          <div className="visual-note note-top">IDEA&nbsp; 01</div>
          <div className="visual-note note-bottom">GROW AT YOUR OWN PACE</div>
        </div>

        <p className="panel-footer">Thoughtfully made for what comes next.</p>
      </section>

      <section className="form-panel" aria-label={isSignup ? 'Sign up' : 'Log in'}>
        <div className="form-wrap">
          <div className="mobile-brand" aria-hidden="true">
            <span className="brand-mark">
              <span />
              <span />
              <span />
            </span>
            forma
          </div>

          <div className="form-heading">
            <p className="eyebrow">YOUR SPACE AWAITS</p>
            <h2>{isSignup ? 'Create your account' : 'Welcome back'}</h2>
            <p className="form-subtitle">
              {isSignup
                ? 'Start making room for what matters.'
                : 'Pick up right where you left off.'}
            </p>
          </div>

          <div className="mode-switch" role="tablist" aria-label="Account access">
            <button
              className={!isSignup ? 'mode-tab active' : 'mode-tab'}
              type="button"
              role="tab"
              aria-selected={!isSignup}
              onClick={() => changeMode('login')}
            >
              Log in
            </button>
            <button
              className={isSignup ? 'mode-tab active' : 'mode-tab'}
              type="button"
              role="tab"
              aria-selected={isSignup}
              onClick={() => changeMode('signup')}
            >
              Sign up
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {isSignup && (
              <div className="field">
                <label htmlFor="full-name">Your name</label>
                <input
                  autoComplete="name"
                  id="full-name"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  required
                />
              </div>
            )}

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                autoComplete="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </div>

            <div className="field">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                {!isSignup && (
                  <button
                    className="text-button"
                    type="button"
                    onClick={() =>
                      setMessage('Password reset is not connected yet.')
                    }
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="password-input">
                <input
                  autoComplete={isSignup ? 'new-password' : 'current-password'}
                  id="password"
                  minLength={8}
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {isSignup ? (
              <label className="check-row">
                <input name="updates" type="checkbox" />
                <span>Send me occasional notes and product updates</span>
              </label>
            ) : (
              <label className="check-row">
                <input name="remember" type="checkbox" />
                <span>Keep me logged in</span>
              </label>
            )}

            <button className="submit-button" type="submit">
              {isSignup ? 'Create account' : 'Log in'}
              <span aria-hidden="true">↗</span>
            </button>
            <p aria-live="polite" className="form-message">
              {message}
            </p>
          </form>

          <p className="switch-prompt">
            {isSignup ? 'Already have an account?' : 'New to Forma?'}{' '}
            <button
              className="text-button prompt-link"
              onClick={() => changeMode(isSignup ? 'login' : 'signup')}
              type="button"
            >
              {isSignup ? 'Log in' : 'Create an account'}
            </button>
          </p>
          <p className="legal-note">
            By continuing, you agree to our <a href="#terms">Terms</a> and{' '}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
