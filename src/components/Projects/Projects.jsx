import { projects } from '../../data';
import useReveal from '../../hooks/useReveal';
import { GitHubIcon, ExternalIcon } from '../Icons';
import './Projects.css';

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="section">
      <div className="container reveal" ref={ref}>
        <h2 className="sec-title"><span className="idx">// 02.</span>Projects</h2>
        <div className="projects">
          {projects.map((p) => (
            <article className="card project" key={p.title}>
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>
              <div className="project__stack">
                {p.stack.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
              <div className="project__links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`}>
                    <ExternalIcon /> Live
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`}>
                    <GitHubIcon /> Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
