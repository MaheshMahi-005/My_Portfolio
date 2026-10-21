import { internships } from '../../data';
import useReveal from '../../hooks/useReveal';
import './Internships.css';

export default function Internships() {
  const ref = useReveal();
  return (
    <section id="internships" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <h2 className="sec-title"><span className="idx">// 03.</span> Internships</h2>
        <ol className="intern">
          {internships.map((n) => (
            <li className="intern__item" key={n.role}>
              <div className="card">
                <p className="intern__period">{n.period}</p>
                <h3 className="intern__role">{n.role}</h3>
                <p className="intern__org">{n.org}</p>
                <p className="intern__desc">{n.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
