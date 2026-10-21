import { education } from '../../data';
import useReveal from '../../hooks/useReveal';
import './Education.css';

export default function Education() {
  const ref = useReveal();
  return (
    <section id="education" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <h2 className="sec-title"><span className="idx">// 05.</span> Education</h2>
        <ol className="edu">
          {education.map((e, i) => (
            <li className="edu__item" key={e.school} style={{ '--i': i }}>
              <p className="edu__period">{e.period}</p>
              <h3 className="edu__school">{e.school}</h3>
              <p className="edu__degree">{e.degree} · <span>{e.score}</span></p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
