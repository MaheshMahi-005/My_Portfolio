import { useEffect, useState } from 'react';
import { profile } from '../../data';
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from '../Icons';
import './Hero.css';

export default function Hero() {
  const [i, setI] = useState(0);
  const { roles } = profile;

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 3600);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__prompt">$ whoami</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role" aria-live="polite">
          <span className="hero__arrow">&gt;</span>
          <span key={i} className="typed" style={{ '--chars': roles[i].length }}>{roles[i]}</span>
        </p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--solid">View Projects</a>
          <a href={profile.resume} download className="btn"><DownloadIcon /> Download Resume</a>
        </div>

        <div className="hero__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GitHubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedInIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Send an email"><MailIcon /></a>
        </div>
      </div>
    </section>
  );
}
