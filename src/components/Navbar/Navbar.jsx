import { useEffect, useState } from 'react';
import { sections } from '../../data';
import useActiveSection from '../../hooks/useActiveSection';
import { SunIcon, MoonIcon } from '../Icons';
import './Navbar.css';

const ids = sections.map((s) => s.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Main">
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" onClick={() => setOpen(false)}>
          &lt;mahesh<span>/</span>&gt;
        </a>

        <ul className={`nav__links ${open ? 'is-open' : ''}`}>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={active === s.id ? 'active' : ''}
                aria-current={active === s.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title="Toggle theme"
          >
            <span className={`theme-toggle__icon ${theme === 'dark' ? 'show' : ''}`}><SunIcon /></span>
            <span className={`theme-toggle__icon ${theme === 'light' ? 'show' : ''}`}><MoonIcon /></span>
          </button>
          <button
            className={`hamburger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
