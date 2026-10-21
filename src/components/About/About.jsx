import { profile, skills } from '../../data';
import useReveal from '../../hooks/useReveal';
import { DownloadIcon } from '../Icons';
import './About.css';

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <h2 className="sec-title"><span className="idx">// 01.</span> About</h2>
        <div className="about">
          <div className="about__bio">
            <p>{profile.bio}</p>
            <a href={profile.resume} download className="btn btn--solid about__resume">
              <DownloadIcon /> Download Resume
            </a>
          </div>
          <div className="about__skills">
            {skills.map((g) => (
              <div className="skillgroup" key={g.group}>
                <h3>{g.group}</h3>
                <div className="skillgroup__chips">
                  {g.items.map((s) => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
