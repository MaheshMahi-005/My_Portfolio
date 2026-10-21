import { profile } from '../../data';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../Icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="footer__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
        </div>
      </div>
    </footer>
  );
}
